import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { desc, eq } from "@acme/db";
import { CreatePatientSchema, Patient } from "@acme/db/schema";

import { protectedProcedure, publicProcedure } from "../trpc";

export const patientRouter = {
  all: protectedProcedure.query(({ ctx }) => {
    return ctx.db.query.Patient.findMany({
      orderBy: desc(Patient.id),
      limit: 10,
    });
  }),

  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.Patient.findFirst({
        where: eq(Patient.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(CreatePatientSchema)
    .mutation(({ ctx, input }) => {
      const data = {
        ...input,
        dateOfBirth: input.dateOfBirth.toISOString(),
        doctorId: ctx.session.user.id,
      };
      return ctx.db.insert(Patient).values(data);
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: CreatePatientSchema,
      }),
    )
    .mutation(({ ctx, input }) => {
      const data = {
        ...input.data,
        dateOfBirth: input.data.dateOfBirth.toISOString(),
      };
      return ctx.db.update(Patient).set(data).where(eq(Patient.id, input.id));
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.delete(Patient).where(eq(Patient.id, input));
  }),
} satisfies TRPCRouterRecord;

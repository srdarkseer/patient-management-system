import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { desc, eq } from "@acme/db";
import { Assessment, CreateAssessmentSchema } from "@acme/db/schema";

import { protectedProcedure, publicProcedure } from "../trpc";

export const assessmentRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.Assessment.findMany({
      orderBy: desc(Assessment.id),
      limit: 10,
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.Assessment.findFirst({
        where: eq(Assessment.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(CreateAssessmentSchema)
    .mutation(({ ctx, input }) => {
      const data = {
        ...input,
        assessmentDate: input.assessmentDate.toISOString(), // Convert Date object to string
      };
      return ctx.db.insert(Assessment).values(data);
    }),

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        data: CreateAssessmentSchema,
      }),
    )
    .mutation(({ ctx, input }) => {
      const data = {
        ...input.data,
        assessmentDate: input.data.assessmentDate.toISOString(),
      };
      return ctx.db
        .update(Assessment)
        .set(data)
        .where(eq(Assessment.id, input.id));
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.delete(Assessment).where(eq(Assessment.id, input));
  }),
} satisfies TRPCRouterRecord;

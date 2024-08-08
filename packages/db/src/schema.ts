import { relations, sql } from "drizzle-orm";
import {
  date,
  integer,
  json,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const Post = pgTable("post", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  title: varchar("name", { length: 256 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt", {
    mode: "date",
    withTimezone: true,
  }).$onUpdateFn(() => sql`now()`),
});

export const CreatePostSchema = createInsertSchema(Post, {
  title: z.string().max(256),
  content: z.string().max(256),
}).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const User = pgTable("user", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    withTimezone: true,
  }),
  image: varchar("image", { length: 255 }),
});

export const UserRelations = relations(User, ({ many }) => ({
  accounts: many(Account),
}));

export const Account = pgTable(
  "account",
  {
    userId: uuid("userId")
      .notNull()
      .references(() => User.id, { onDelete: "cascade" }),
    type: varchar("type", { length: 255 })
      .$type<"email" | "oauth" | "oidc" | "webauthn">()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const AccountRelations = relations(Account, ({ one }) => ({
  user: one(User, { fields: [Account.userId], references: [User.id] }),
}));

export const Session = pgTable("session", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: uuid("userId")
    .notNull()
    .references(() => User.id, { onDelete: "cascade" }),
  expires: timestamp("expires", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
});

export const SessionRelations = relations(Session, ({ one }) => ({
  user: one(User, { fields: [Session.userId], references: [User.id] }),
}));

export const Patient = pgTable("patient", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  gender: varchar("gender", { length: 10 }).notNull(),
  phoneNumber: varchar("phoneNumber", { length: 15 }).notNull(),
  dateOfBirth: date("dateOfBirth").notNull(),
  age: integer("age").notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  // doctorId: uuid("doctorId")
  //   .notNull()
  //   .references(() => User.id, { onDelete: "cascade" }),
});

export const CreatePatientSchema = createInsertSchema(Patient, {
  fullName: z.string().max(255),
  gender: z.string().max(10),
  phoneNumber: z.string().max(15),
  dateOfBirth: z.date(),
  age: z.number(),
  address: z.string().max(255),
  // doctorId: z.string().uuid(),
}).omit({
  id: true,
});

export const Assessment = pgTable("assessment", {
  id: uuid("id").defaultRandom().primaryKey(),
  assessmentType: varchar("assessmentType", { length: 255 }).notNull(),
  patientId: uuid("patientId")
    .notNull()
    .references(() => Patient.id, { onDelete: "cascade" }),
  assessmentDate: date("assessmentDate").notNull(),
  questionsAndAnswers: json("questionsAndAnswers").notNull(),
  finalScore: integer("finalScore").notNull(),
});

// Create the schema for inserting a new Assessment
export const CreateAssessmentSchema = createInsertSchema(Assessment, {
  assessmentType: z.string().max(255),
  patientId: z.string().uuid(),
  assessmentDate: z.date(),
  questionsAndAnswers: z.object({}).passthrough(), // Assuming questionsAndAnswers is a JSON object
  finalScore: z.number(),
}).omit({
  id: true,
});

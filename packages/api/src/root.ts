import { assessmentRouter } from "./router/assessment";
import { authRouter } from "./router/auth";
import { patientRouter } from "./router/patients";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  assessment: assessmentRouter,
  patient: patientRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

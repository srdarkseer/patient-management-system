import { Button } from "~/components/ui/button";
import { api, HydrateClient } from "~/trpc/server";
import RecentAssessments from "./_components/RecentAssessment";
import RecentHistory from "./_components/RecentHistory";

export const runtime = "edge";

export default function HomePage() {
  // You can await this here if you don't want to show Suspense fallback below
  void api.post.all.prefetch();

  return (
    <HydrateClient>
      <main className="px-2 py-1">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://github.com/shadcn.png"
              alt="User Avatar"
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-sm text-slate-500">Welcome Back</p>
              <p className="text-lg font-bold">Dr. Johnson</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm">Monday</p>
            <p className="text-base font-medium">16 April, 2024</p>
          </div>
        </div>

        <div className="flex justify-end p-4">
          <Button variant={"default"} size={"lg"}>
            + New assessment
          </Button>
        </div>

        <RecentHistory />

        <RecentAssessments />
      </main>
    </HydrateClient>
  );
}

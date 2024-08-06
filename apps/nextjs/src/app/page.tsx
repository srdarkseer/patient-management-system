import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api, HydrateClient } from "~/trpc/server";
import RecentAssessments from "./_components/RecentAssessment";
import RecentHistory from "./_components/RecentHistory";

export default function HomePage() {
  // Use client-side data fetching or prefetching if required
  // void api.post.all.prefetch();

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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"default"} size={"lg"}>
                + New assessment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Assessment</DialogTitle>
                <DialogDescription>
                  Fill in the details to start a new assessment.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Cognitive status
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cognitive status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cognition">Cognition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Applicable measures
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select applicable measures" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SLUMS">SLUMS</SelectItem>
                      {/* Add more options as needed */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Patient
                  </label>
                  <Input type="text" placeholder="Enter patient name or ID" />
                </div>
                <DialogFooter>
                  <Button type="submit" variant="default" size="lg">
                    Start assessment
                  </Button>
                </DialogFooter>
              </form>
              <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>

        <RecentHistory />

        <RecentAssessments />
      </main>
    </HydrateClient>
  );
}

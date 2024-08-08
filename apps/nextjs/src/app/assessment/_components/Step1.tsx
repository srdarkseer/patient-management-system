"use client";

import React from "react";
import { Button } from "~/components/ui/button";

export default function Step1() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl font-bold">How many fingers do you see?</h2>
      <p className="mb-6 text-center text-gray-500">
        Please show the patient a certain amount of fingers and follow their
        reaction.
      </p>
      <div className="w-full max-w-sm">
        <Button variant={'outline'} size={"lg"} className="mb-4 w-full rounded-lg border-2 border-gray-200 bg-white  hover:border-orange-500 focus:border-orange-500 focus:outline-none">
          Correct
        </Button>
        <Button variant={'outline'} size={"lg"} className="w-full rounded-lg border-2 border-gray-200 bg-white  hover:border-orange-500 focus:border-orange-500 focus:outline-none">
          Incorrect
        </Button>
      </div>
    </div>
  );
}

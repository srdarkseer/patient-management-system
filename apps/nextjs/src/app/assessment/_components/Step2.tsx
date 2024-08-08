"use client";

import React, { useState } from "react";

export default function Step2() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl font-bold">Story "Jill went to the shop"</h2>
      <p className="mb-2 text-center text-gray-500">
        Jill went to the shop to buy candies. Afterwards instead of walking to
        home, she took a cab.
      </p>
      <p className="mb-6 cursor-pointer text-center text-orange-500">
        Show all
      </p>
      <div className="w-full max-w-sm">
        <button
          onClick={() => setSelectedOption("option1")}
          className={`mb-4 w-full rounded-lg border-2 bg-white px-6 py-3 ${selectedOption === "option1" ? "border-orange-500" : "border-gray-200"} flex items-center justify-between focus:border-orange-500 focus:outline-none`}
        >
          Jill bought candies.
          {selectedOption === "option1" && (
            <span className="text-orange-500">&#10003;</span>
          )}
        </button>
        <button
          onClick={() => setSelectedOption("option2")}
          className={`mb-4 w-full rounded-lg border-2 bg-white px-6 py-3 ${selectedOption === "option2" ? "border-orange-500" : "border-gray-200"} flex items-center justify-between focus:border-orange-500 focus:outline-none`}
        >
          Jill has a dog as a pet.
          {selectedOption === "option2" && (
            <span className="text-orange-500">&#10003;</span>
          )}
        </button>
        <button
          onClick={() => setSelectedOption("option3")}
          className={`w-full rounded-lg border-2 bg-white px-6 py-3 ${selectedOption === "option3" ? "border-orange-500" : "border-gray-200"} flex items-center justify-between focus:border-orange-500 focus:outline-none`}
        >
          Jill took a cab.
          {selectedOption === "option3" && (
            <span className="text-orange-500">&#10003;</span>
          )}
        </button>
      </div>
    </div>
  );
}

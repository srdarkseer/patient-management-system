"use client";

import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const steps = [
  { id: 1, title: "How many fingers do you see?", component: Step1 },
  { id: 2, title: 'Story "Jill went to the shop"', component: Step2 },
  { id: 3, title: "Read the sentences", component: Step3 },
  { id: 4, title: "Identify the animals", component: Step4 },
  { id: 5, title: "Confirm the results", component: Step5 },
];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  const CurrentComponent = steps[currentStep]?.component;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mx-auto mt-10 flex w-full max-w-2xl items-center rounded-xl bg-white px-4 py-10">
      <div className="relative h-[70vh] w-full text-center">
        <div className="mb-4 text-center">
          {CurrentComponent && <CurrentComponent />}
        </div>
        <div className="mt-4 flex justify-between">
          <Button
            variant="outline"
            size="lg"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="absolute bottom-0 left-0 rounded bg-white text-gray-700 disabled:opacity-50"
          >
            Back
          </Button>
          {currentStep < steps.length - 1 && currentStep !== 3 ? (
            <Button
              variant="default"
              size="lg"
              onClick={nextStep}
              className="absolute bottom-0 right-0"
            >
              Continue
            </Button>
          ) : currentStep === 3 ? (
            <Button
              variant="default"
              size="lg"
              onClick={nextStep}
              className="absolute bottom-0 right-0"
            >
              Finish
            </Button>
          ) : (
            <Button
              variant="default"
              size="lg"
              onClick={handlePrint}
              className="absolute bottom-0 right-0"
            >
              Print
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

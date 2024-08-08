"use client";

import React, { useState } from "react";
import { GiChicken, GiHorseHead, GiSittingDog } from "react-icons/gi";
import { Switch } from "~/components/ui/switch"; 

export default function Step4() {
  const [selectedAnimals, setSelectedAnimals] = useState<{
    [key: string]: boolean;
  }>({
    chicken: false,
    horse: false,
    dog: false,
  });

  const toggleAnimal = (animal: string) => {
    setSelectedAnimals((prev) => ({
      ...prev,
      [animal]: !prev[animal],
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl font-bold">Identify the animals</h2>
      <p className="mb-6 text-center text-gray-500">
        Please show the patient the following animals and check their response.
      </p>
      <div className="w-full max-w-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <GiChicken className="mr-4" size={32} />
            <span>Chicken</span>
          </div>
          <Switch
            checked={selectedAnimals.chicken}
            onCheckedChange={() => toggleAnimal("chicken")}
            className={`${selectedAnimals.chicken ? "bg-orange-500" : ""}`}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <GiHorseHead className="mr-4" size={32} />
            <span>Horse</span>
          </div>
          <Switch
            checked={selectedAnimals.horse}
            onCheckedChange={() => toggleAnimal("horse")}
            className={`${selectedAnimals.horse ? "bg-orange-500" : ""}`}
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <GiSittingDog className="mr-4" size={32} />
            <span>Dog</span>
          </div>
          <Switch
            checked={selectedAnimals.dog}
            onCheckedChange={() => toggleAnimal("dog")}
            className={`${selectedAnimals.dog ? "bg-orange-500" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}

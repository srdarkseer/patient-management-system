"use client";

import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

export default function Step5() {
  const totalQuestions = 18;
  const correctAnswers = 12;

  const results = [
    { question: "Question 1", result: "Correct" },
    { question: "Question 2", result: "Correct" },
    { question: "Question 3", result: "Incorrect" },
    { question: "Question 4", result: "Correct" },
  ];

  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-2 text-2xl font-bold">Confirm the results</h2>
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <div className="mb-4 flex justify-center">
          <div className="h-24 w-24">
            <CircularProgressbar
              value={percentage}
              text={`${correctAnswers}/${totalQuestions}`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: `#4caf50`,
                textColor: "#000",
                trailColor: "#d6d6d6",
                backgroundColor: "#f8f8f8",
              })}
            />
          </div>
        </div>
        <div className="mb-4">
          {results.map((result, index) => (
            <div key={index} className="flex justify-between">
              <span>{result.question}</span>
              <span
                className={
                  result.result === "Correct"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {result.result}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button className="text-orange-500">Show all</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

const RecentAssessments: React.FC = () => {
  const assessment = [
    { id: "COGNITION", title: "SLUMS" },
    { id: "Z00.00", title: "Physical Examination" },
    { id: "Z01.89", title: "Diagnostic Tests" },
  ];

  return (
    <div className="mt-6 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent assessments</h2>
        <Link href="#" className="text-sm text-blue-600 hover:underline">
          See more →
        </Link>
      </div>
      <div className="mt-4 space-y-4">
        {assessment &&
          assessment?.map((item, index) => (
            <div key={index} className="rounded-xl bg-white p-4 shadow">
              <div className="flex items-center justify-between">
                <div className="w-96 rounded-full bg-orange-100 p-1 px-4">
                  <p className="text-base font-semibold text-orange-700">
                    {item.id} •{" "}
                    <span className="text-sm font-medium">{item.title}</span>
                  </p>
                </div>

                <IoIosArrowDropright className="h-7 w-7 text-orange-700" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentAssessments;

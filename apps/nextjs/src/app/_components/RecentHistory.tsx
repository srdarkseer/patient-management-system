import React from "react";
import { IoIosArrowDropright } from "react-icons/io";

const RecentHistory: React.FC = () => {
  const history = [
    {
      id: "Z00.00",
      title: "Physical Examination",
      name: "Emerson Calzoni",
      details: "Male • 36 Years old • 84 kg",
      date: "02.03.2024",
    },
    {
      id: "Z01.89",
      title: "Diagnostic Tests",
      name: "Davis Culhane",
      details: "Male • 41 Years old • 84 kg",
      date: "01.03.2024",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent history</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          See more →
        </a>
      </div>
      <div className="mt-4 space-y-4">
        {history &&
          history?.map((item, index) => (
            <div key={index} className="rounded-xl bg-white p-4 shadow">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="w-96 rounded-full bg-blue-100 p-1 px-4">
                    <p className="text-base font-semibold text-blue-900">
                      {item.id} •{" "}
                      <span className="text-sm font-medium">{item.title}</span>
                    </p>
                  </div>

                  <IoIosArrowDropright className="h-7 w-7 text-blue-900" />
                </div>
                <div className="flex items-end justify-between px-2 pt-4">
                  <div>
                    <p className="text-lg font-bold text-black">{item.name}</p>
                    <p className="text-sm font-medium text-gray-600">
                      {item.details}
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-600">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentHistory;

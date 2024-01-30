"use client";
import React from "react";
import { useState } from "react";

type LevelTabProps = {
  level: string;
};

const LevelTab = ({ level }: LevelTabProps) => {
  const [activeTab, setActiveTab] = useState("第1級");
  return (
    <div>
      {["第1級", "第2級", "第3級"].map((level) => (
        <button
          key={level}
          className={`px-4 py-2 mr-2 ${
            activeTab === level ? "text-red-600 font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab(level)}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default LevelTab;

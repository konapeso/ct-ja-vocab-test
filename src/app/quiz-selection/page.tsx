// src/app/pages/QuizSelectionPage.tsx
"use client";
import Link from "next/link";
import React from "react";

const QuizSelectionPage: React.FC = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        クイズのレベル選択
      </h1>
      <div className="flex mb-4">
        {["第1級", "第2級", "第3級"].map((level) => (
          <Link key={level} href={`/quiz/${level}`} passHref>
            <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded">
              {level}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizSelectionPage;

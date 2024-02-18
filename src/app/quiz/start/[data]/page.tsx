"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
interface QuizStartProps {
  mode: string;
  level?: string | number;
  numberOfQuestions: string | number;
}

const QuizStart = () => {
  const searchParams = useSearchParams();
  const mode = searchParams?.get("mode");
  const level = searchParams?.get("level");
  const numberOfQuestions = searchParams?.get("numberOfQuestions");
  console.log("mode", mode);

  return (
    <div>
      <h1>Quiz Page</h1>
      <p>Mode: {mode}</p>
      <p>Level: {level}</p>
      <p>Number of Questions: {numberOfQuestions}</p>
      {/* ここに必要なコンポーネントを表示 */}
    </div>
  );
};
export default QuizStart;

// // src/app/pages/QuizSelectionPage.tsx
// // src/app/pages/QuizPage.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface QuizOptions {
  mode: "level" | "random";
  level?: number;
  numberOfQuestions: number;
}

const QuizSelection: React.FC = () => {
  const router = useRouter();
  const [QuizOptions, setQuizOptions] = useState<QuizOptions>({
    mode: "level",
    numberOfQuestions: 10,
  });

  const handleModeChange = (mode: QuizOptions["mode"]) => {
    if (mode === "random") {
      setQuizOptions({
        mode: "random",
        numberOfQuestions: 10,
      });
    } else {
      setQuizOptions({
        mode: "level",
        level: 1,
        numberOfQuestions: 10,
      });
    }
  };

  const handleLevelChange = (level: number) => {
    setQuizOptions({
      ...QuizOptions,
      level,
    });
  };

  const handleNumberOfQuestionsChange = (numberOfQuestions: number) => {
    setQuizOptions({
      ...QuizOptions,
      numberOfQuestions,
    });
  };

  const handleStartTest = () => {
    // テスト画面へ遷移し、選択したテストオプションを渡す
    router.push("/quiz");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-2xl mb-4">Word Test Selection</h1>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="level"
          name="mode"
          value="level"
          className="mr-2"
          checked={QuizOptions.mode === "level"}
          onChange={() => handleModeChange("level")}
        />
        <label htmlFor="level" className="mr-4 cursor-pointer">
          Level-Based Test
        </label>
        <input
          type="radio"
          id="random"
          name="mode"
          value="random"
          className="mr-2"
          checked={QuizOptions.mode === "random"}
          onChange={() => handleModeChange("random")}
        />
        <label htmlFor="random" className="cursor-pointer">
          Random Test
        </label>
      </div>
      {QuizOptions.mode === "level" && (
        <div className="mb-4">
          <span className="mr-2">Select Level:</span>
          {[1, 2, 3].map((level) => (
            <label
              key={level}
              className="inline-flex items-center mr-4 cursor-pointer"
            >
              <input
                type="radio"
                name="level"
                value={level}
                className="mr-1"
                checked={QuizOptions.level === level}
                onChange={() => handleLevelChange(level)}
              />
              第{level}級
            </label>
          ))}
        </div>
      )}
      <div className="mb-4">
        <span className="mr-2">Number of Questions:</span>
        {[10, 20, 30, 40, 50].map((number) => (
          <button
            key={number}
            className={`mr-2 py-1 px-2 rounded border ${
              QuizOptions.numberOfQuestions === number
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => handleNumberOfQuestionsChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">
        Start Test!
      </button>
    </div>
  );
};

export default QuizSelection;

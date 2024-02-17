// // src/app/pages/QuizPage.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

export type QuizOptions = {
  mode: "level" | "random";
  level?: number;
  numberOfQuestions: number;
};

const QuizOptions = ({ mode, level, numberOfQuestions }: QuizOptions) => {
  const [selectedMode, setSelectedMode] = useState<"level" | "random">(mode);
  const [selectedLevel, setSelectedLevel] = useState<number | undefined>(level);
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] =
    useState<number>(numberOfQuestions);

  const handleModeChange = (mode: "level" | "random") => {
    setSelectedMode(mode);
    if (mode === "level") {
      setSelectedLevel(1);
    }
  };

  const handleLevelChange = (level: number) => {
    setSelectedLevel(level);
  };

  const handleNumberOfQuestionsChange = (numberOfQuestions: number) => {
    setSelectedNumberOfQuestions(numberOfQuestions);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-2xl mb-4">Word Quiz Options</h1>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="level"
          name="mode"
          value="level"
          className="mr-2"
          checked={selectedMode === "level"}
          onChange={() => handleModeChange("level")}
        />
        <label htmlFor="level" className="mr-4 cursor-pointer">
          Level-Based Quiz
        </label>
        <input
          type="radio"
          id="random"
          name="mode"
          value="random"
          className="mr-2"
          checked={selectedMode === "random"}
          onChange={() => handleModeChange("random")}
        />
        <label htmlFor="random" className="cursor-pointer">
          Random Quiz
        </label>
      </div>
      {selectedMode === "level" && (
        <div className="mb-4">
          <span className="mr-2">Select Level:</span>
          {[1, 2, 3].map((lvl) => (
            <label
              key={lvl}
              className="inline-flex items-center mr-4 cursor-pointer"
            >
              <input
                type="radio"
                name="level"
                value={lvl}
                className="mr-1"
                checked={selectedLevel === lvl}
                onChange={() => handleLevelChange(lvl)}
              />
              第{lvl}級
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
              selectedNumberOfQuestions === number
                ? "bg-blue-500 text-white"
                : ""
            }`}
            onClick={() => handleNumberOfQuestionsChange(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <Link
        href={{
          pathname: "/quiz/start/[data]",
          query: {
            mode: selectedMode,
            level: selectedLevel,
            numberOfQuestions: selectedNumberOfQuestions,
          },
        }}
        as={`/quiz/start/data?mode=${selectedMode}&level=${selectedLevel}&numberOfQuestions=${selectedNumberOfQuestions}`} // asプロパティを使って、実際のパスを指定する
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Quiz !
      </Link>
    </div>
  );
};

export default QuizOptions;

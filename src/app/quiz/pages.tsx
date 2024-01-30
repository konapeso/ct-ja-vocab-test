// // src/app/pages/QuizPage.tsx
// "use client";

// import { useRouter } from "next/router";
// import React, { useState, useEffect } from "react";
// import { translateKeys, TranslatedWordData } from "../_utils/translateKeys";
// import originalData from "../data/basic-vocab.json";

// const QuizPage: React.FC = () => {
//   const router = useRouter();
//   const { level } = router.query;
//   const [questions, setQuestions] = useState<TranslatedWordData[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string>("");
//   const [answers, setAnswers] = useState<string[]>([]);

//   useEffect(() => {
//     if (level) {
//       const selectedLevel = Array.isArray(level) ? level[0] : level;
//       const filteredData = translateKeys(originalData)
//         .filter(
//           (word) =>
//             word.level.replace("*", "") === selectedLevel.replace("*", "")
//         )
//         .sort(() => 0.5 - Math.random())
//         .slice(0, 10);
//       setQuestions(filteredData);
//     }
//   }, [level]);

//   const currentQuestion = questions[currentQuestionIndex];

//   const handleAnswer = (answer: string) => {
//     setSelectedAnswer(answer);
//     setAnswers((prev) => [
//       ...prev,
//       answer === currentQuestion.translation ? "⭕️" : "❌",
//     ]);
//   };

//   const handleNextQuestion = () => {
//     setSelectedAnswer("");
//     setCurrentQuestionIndex((prev) => prev + 1);
//   };

//   if (currentQuestionIndex >= questions.length) {
//     return (
//       <div className="container mx-auto py-4">
//         <h1 className="text-3xl font-bold text-red-600 mb-4">クイズ結果</h1>
//         {answers.map((answer, index) => (
//           <div key={index} className="mb-2">
//             問題 {index + 1}: {answer}
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-4">
//       <h1 className="text-3xl font-bold text-red-600 mb-4">クイズ</h1>
//       <div className="mb-4">
//         <p className="text-xl font-bold">
//           問題 {currentQuestionIndex + 1}: {currentQuestion?.word}
//         </p>
//         <div>
//           {currentQuestion &&
//             getChoices(currentQuestion, questions).map((choice, index) => (
//               <button
//                 key={index}
//                 className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
//                 onClick={() => handleAnswer(choice)}
//                 disabled={!!selectedAnswer}
//               >
//                 {choice}
//               </button>
//             ))}
//         </div>
//       </div>
//       {selectedAnswer && (
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded"
//           onClick={handleNextQuestion}
//         >
//           次へ
//         </button>
//       )}
//     </div>
//   );
// };

// const getChoices = (
//   currentQuestion: TranslatedWordData,
//   allQuestions: TranslatedWordData[]
// ) => {
//   let choices = [currentQuestion.translation];
//   while (choices.length < 4) {
//     const randomChoice =
//       allQuestions[Math.floor(Math.random() * allQuestions.length)].translation;
//     if (!choices.includes(randomChoice)) {
//       choices.push(randomChoice);
//     }
//   }
//   return shuffleArray(choices);
// };

// const shuffleArray = (array: string[]) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

// export default QuizPage;

import React from "react";
import { getAllVocabs } from "@/vocabAPI";
import LevelTab from "../components/LevelTab";

const List = async () => {
  const vocabs = await getAllVocabs();

  return (
    <div>
      <LevelTab />
      {vocabs.map((vocab) => (
        <div key={vocab.id}>
          <p>{vocab.word}</p>
          <p>{vocab.pinyin}</p>
          <p>{vocab.translation}</p>
        </div>
      ))}
    </div>
  );
};

export default List;

// // src/app/pages/WordsListPage.tsx
// "use client";
// import React, { useState } from "react";
// import { translateKeys, TranslatedWordData } from "../_utils/translateKeys";
// import originalData from "../data/basic-vocab.json";

// const translatedData = translateKeys(originalData);

// const WordsListPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState("第1級");

//   const filteredData = translatedData.filter((word) => {
//     const normalizedLevel = word.level.replace("*", "");
//     const normalizedActiveTab = activeTab.replace("*", "");
//     return normalizedLevel === normalizedActiveTab;
//   });

//   return (
//     <div className="container mx-auto py-4">
//       <h1 className="text-3xl font-bold text-red-600 mb-4">単語一覧</h1>
//       <div className="flex mb-4">
//         {["第1級", "第2級", "第3級"].map((level) => (
//           <button
//             key={level}
//             className={`px-4 py-2 mr-2 ${
//               activeTab === level ? "text-red-600 font-bold" : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab(level)}
//           >
//             {level}
//           </button>
//         ))}
//       </div>
//       <table className="min-w-full bg-white border-collapse">
//         <thead>
//           <tr className="text-md font-semibold tracking-wide text-left text-red-900 bg-red-100 uppercase border-b border-red-600">
//             <th className="px-4 py-3">ID</th>
//             <th className="px-4 py-3">詞語</th>
//             <th className="px-4 py-3">級別</th>
//             <th className="px-4 py-3">注音</th>
//             <th className="px-4 py-3">漢拼</th>
//             <th className="px-4 py-3">詞類/性質</th>
//             <th className="px-4 py-3">詞彙英譯</th>
//             <th className="px-4 py-3">例句</th>
//             <th className="px-4 py-3">語義/義項</th>
//             <th className="px-4 py-3">用法-常用搭配詞</th>
//           </tr>
//         </thead>
//         <tbody className="bg-white">
//           {filteredData.map((word: TranslatedWordData) => (
//             <tr className="text-gray-700" key={word.id}>
//               <td className="px-4 py-3 border">{word.id}</td>
//               <td className="px-4 py-3 border">{word.word}</td>
//               <td className="px-4 py-3 border">{word.level}</td>
//               <td className="px-4 py-3 border">{word.phonetic}</td>
//               <td className="px-4 py-3 border">{word.pinyin}</td>
//               <td className="px-4 py-3 border">{word.category}</td>
//               <td className="px-4 py-3 border">{word.translation}</td>
//               <td className="px-4 py-3 border">{word.example}</td>
//               <td className="px-4 py-3 border">{word.meaning ?? "N/A"}</td>
//               <td className="px-4 py-3 border">{word.usage ?? "N/A"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WordsListPage;

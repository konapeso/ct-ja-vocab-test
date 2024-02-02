import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { TranslatedData } from "@/types";

const ListContent = ({
  value,
  tabValue,
  filteredVocabs,
}: {
  value: string;
  tabValue: string;
  filteredVocabs: any;
}) => (
  <TabsContent
    value={value}
    className={`h-full flex-col border-none px-2 ${
      tabValue === value ? "flex" : "hidden"
    }`}
  >
    <table className="min-w-full bg-white border-collapse">
      <thead>
        <tr className="text-md font-semibold tracking-wide text-left text-red-900 bg-red-100 uppercase border-b border-red-600">
          <th className="px-4 py-3">ID</th>
          <th className="px-4 py-3">詞語</th>
          <th className="px-4 py-3">級別</th>
          <th className="px-4 py-3">注音</th>
          <th className="px-4 py-3">漢拼</th>
          <th className="px-4 py-3">詞類/性質</th>
          <th className="px-4 py-3">詞彙英譯</th>
          <th className="px-4 py-3">例句</th>
          <th className="px-4 py-3">語義/義項</th>
          <th className="px-4 py-3">用法-常用搭配詞</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {filteredVocabs.map((vocab: TranslatedData) => (
          <tr className="text-gray-700" key={vocab.id}>
            <td className="px-4 py-3 border">{vocab.id}</td>
            <td className="px-4 py-3 border">{vocab.word}</td>
            <td className="px-4 py-3 border">{vocab.level}</td>
            <td className="px-4 py-3 border">{vocab.phonetic}</td>
            <td className="px-4 py-3 border">{vocab.pinyin}</td>
            <td className="px-4 py-3 border">{vocab.category}</td>
            <td className="px-4 py-3 border">{vocab.translation}</td>
            <td className="px-4 py-3 border">{vocab.example}</td>
            <td className="px-4 py-3 border">{vocab.meaning ?? "N/A"}</td>
            <td className="px-4 py-3 border">{vocab.usage ?? "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </TabsContent>
);
export default ListContent;

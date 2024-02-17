import { OriginalData, TranslatedData, translateKeys } from "./types";
// import { notFound } from "next/navigation";

// 全データを取得するAPI関数
export const getAllVocabs = async (): Promise<TranslatedData[]> => {
  try {
    const res = await fetch("http://localhost:3001/vocabs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Errorが発生しました");
    }

    const originalData: OriginalData[] = await res.json();
    return translateKeys(originalData);
  } catch (error) {
    throw new Error("データの取得に失敗しました");
  }
};

// レベル別のデータを取得するAPI関数
export const getVocabsByLevel = async (
  level: number
): Promise<TranslatedData[]> => {
  try {
    const res = await fetch(`http://localhost:3001/vocabs?level=${level}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Errorが発生しました");
    }

    const originalData: OriginalData[] = await res.json();
    return translateKeys(originalData);
  } catch (error) {
    throw new Error("データの取得に失敗しました");
  }
};

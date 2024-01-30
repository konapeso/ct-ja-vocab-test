export type OriginalData = {
  序號: number;
  詞語: string;
  級別: string;
  注音: string;
  漢拼: string;
  "詞類/性質": string;
  詞彙英譯: string;
  情境?: string;
  例句: string;
  "語義/義項"?: string | number; // ここを string | number | undefined 型に修正
  "用法-常用搭配詞"?: string;
};

export type TranslatedData = {
  id: number;
  word: string;
  level: string;
  phonetic: string;
  pinyin: string;
  category: string;
  translation: string;
  context?: string;
  example: string;
  meaning?: string | number; // '語義/義項'に対応するフィールド、string | number 型
  usage?: string;
};

export const translateKeys = (data: OriginalData[]): TranslatedData[] => {
  return data.map((item) => ({
    id: item.序號,
    word: item.詞語,
    level: item.級別,
    phonetic: item.注音,
    pinyin: item.漢拼,
    category: item["詞類/性質"],
    translation: item.詞彙英譯,
    context: item.情境,
    example: item.例句,
    meaning: item["語義/義項"], // string | number 型をそのまま使用
    usage: item["用法-常用搭配詞"],
  }));
};

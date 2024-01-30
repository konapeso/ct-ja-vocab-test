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

// export const getDetailArticle = async (id: string): Promise<Article> => {
//   const res = await fetch(`http://localhost:3001/posts/${id}`, {
//     next: { revalidate: 60 },
//   }); //SSR -> ISR

//   if (res.status === 404) {
//     notFound();
//   }

//   if (!res.ok) {
//     throw new Error("Errorが発生しました");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1000)); //SSR

//   const article = await res.json();
//   return article;
// };

// export const createArticle = async (
//   id: string,
//   title: string,
//   content: string
// ): Promise<Article> => {
//   const currentDatetime = new Date().toISOString();
//   const res = await fetch(`http://localhost:3001/posts/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ id, title, content, createdAt: currentDatetime }),
//   });

//   if (!res.ok) {
//     throw new Error("Errorが発生しました");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1000)); //SSR

//   const newArticle = await res.json();
//   return newArticle;
// };

// export const deleteArticle = async (id: string): Promise<Article> => {
//   const res = await fetch(`http://localhost:3001/posts/${id}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Error("Errorが発生しました");
//   }

//   await new Promise((resolve) => setTimeout(resolve, 1000)); //SSR

//   const deleteArticle = await res.json();
//   return deleteArticle;
// };

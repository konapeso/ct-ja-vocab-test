import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">中国語繁体字単語クイズ</h1>
      <p className="text-lg mb-6">
        このアプリは繁体字の単語を学習するためのクイズを提供します。挑戦してみましょう！
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg block text-center">
            クイズを始める / Start Quiz
          </button>
        </Link>
        <Link href="/about">
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg block text-center">
            単語一覧 / Word List
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg block text-center">
            お問い合わせ / Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

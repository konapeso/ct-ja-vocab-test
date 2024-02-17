import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Traditional Chinese Word Quiz</h1>
      <p className="text-lg mb-6">
        This app provides quizzes to learn traditional Chinese characters.
        Let&rsquo;s give it a try!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/quiz-selection">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg block text-center">
            Start Quiz
          </button>
        </Link>
        <Link href="/words">
          <button className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-lg block text-center">
            Word List
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg block text-center">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-extrabold">
          <Link href="/">Basic Vocab in Traditional Chinese</Link>
        </h1>
      </div>
      <div>
        <nav>
          <Link
            href="/quiz-selection"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 mx-2 rounded-lg"
          >
            Quiz
          </Link>
          <Link
            href="/words"
            className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 mx-2 rounded-lg"
          >
            Words
          </Link>
          <Link
            href="/contsct"
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 mx-2 rounded-lg"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

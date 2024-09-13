import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-wide">
        Welcome to Quotable
      </h1>

      {/* Quote Card */}
      <div className="w-full max-w-lg mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="p-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-24">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <p className="text-xl font-semibold text-gray-800 text-center italic">
              "{quote}"
            </p>
          )}
        </div>
        <div className="bg-gray-100 px-8 py-4 flex justify-between">
          <button
            // onClick={fetchQuote}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            disabled={isLoading}
          >
            <i className="ri-refresh-line text-lg animate-spin mr-2"></i>
            {isLoading ? "loading.." : "New Quote"}
          </button>
          <button
            // onClick={saveQuote}
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            disabled={isLoading || !quote}
          >
            <i className="text-lg ri-save-fill mr-1"></i> Save Quote
          </button>
        </div>
      </div>

      {/* Saved Quotes List */}
      <div className="w-full max-w-lg mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Saved Quotes
        </h2>
        {savedQuotes.length === 0 ? (
          <p className="text-center text-gray-600 italic">
            No quotes saved yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {savedQuotes.map((savedQuote, index) => (
              <li
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <p className="text-gray-800">{savedQuote}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

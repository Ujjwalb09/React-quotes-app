import React, { useState, useEffect } from "react";

export default function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 tracking-wide">
        Quotes App
      </h1>
    </div>
  );
}

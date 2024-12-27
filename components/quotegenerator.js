import { useState } from "react";
import "isomorphic-fetch";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("Click the button to get inspired!");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/quote");
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setQuote(data[0].q); // Quote text
      setAuthor(data[0].a); // Author
    } catch (error) {
      console.error("Error fetching quote:", error.message);
      setQuote("Oops! Couldn't fetch a quote. Please try again later.");
      setAuthor("");
    }
    setLoading(false);
  };
  

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
      {loading ? (
        <h1 className="text-xl font-bold text-gray-800 mb-4">Loading...</h1>
      ) : (
        <h1 className="text-xl font-bold text-gray-800 mb-4">{quote}</h1>
      )}
      {author && <p className="text-gray-500 italic mb-4">- {author}</p>}
      <button
        onClick={fetchQuote}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;

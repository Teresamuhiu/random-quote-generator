"use client";
import QuoteGenerator from '../components/quotegenerator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-blue-500 flex flex-col items-center justify-start py-10">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-8">
        Welcome to Random Quote Generator!
      </h1>
      <QuoteGenerator />
    </main>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddBookForm() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const bookData = {
      title: formData.get("title"),
      author: formData.get("author"),
      genre: formData.get("genre"),
      language: formData.get("language"),
    };

    const response = await fetch("/api/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.message);
    } else {
      window.location.href = "/books";
    }
  };

  return (
    <section className="flex justify-center items-center flex-col space-y-5 h-screen bg-primary bg-cover">
      <Link href="/">
        <button className="bg-blue-500 p-3 rounded-[10px]">Home</button>
      </Link>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 p-8 bg-black/70 rounded-[30px] shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-white mb-4 ml-4">Add a New Book</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="text"
          placeholder="Title"
          name="title"
          required
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          required
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          required
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Language"
          name="language"
          required
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded-[20px] hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

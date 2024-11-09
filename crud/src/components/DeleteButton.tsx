"use client";

import { FormEvent } from "react";

interface DeleteButtonProps {
  bookId: number;
  onDelete: (id: number) => Promise<void>;
}

export default function DeleteButton({ bookId, onDelete }: DeleteButtonProps) {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (confirm("Are you sure you want to delete this book?")) {
      await onDelete(bookId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="bookId" value={bookId} />
      <button className="bg-red-600 text-white p-2 rounded-[20px] text-sm hover:bg-red-700">
        Remove
      </button>
    </form>
  );
}

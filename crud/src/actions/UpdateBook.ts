"use server";

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const updateBook = async (formData: FormData) => {

  const id = formData.get("bookId");
  const title = formData.get("title");
  const author = formData.get("author");
  const genre = formData.get("genre");
  const language = formData.get("language");

  if (!id) return;

  await prisma.book.update({
    where: { id: Number(id) },
    data: {
      title: String(title),
      author: String(author),
      genre: String(genre),
      language: String(language),
    },
  });

  revalidatePath("/books");
};
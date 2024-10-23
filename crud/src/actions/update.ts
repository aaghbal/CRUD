"use server";

import { Book, PrismaClient } from "@prisma/client";

export const update = async (updateData: Book, id: number): Promise<Book> => {
    const { title, author, genre, language } = updateData;

    const prisma = new PrismaClient();

    const updatedBook = await prisma.book.update({
        where: { id: Number(id) },
        data: {
          title,
          author,
          genre,
          language,
        }
    });
    return updatedBook;
}

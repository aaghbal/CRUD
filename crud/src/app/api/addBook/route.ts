import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { title, author, genre, language } = await request.json();

  const existingBook = await prisma.book.findFirst({
    where: {
      title,
      author,
    },
  });

  if (existingBook) {
    return NextResponse.json(
      { message: "This book already exists." },
      { status: 400 }
    );
  }

  await prisma.book.create({
    data: {
      title,
      author,
      genre,
      language,
    },
  });

  return NextResponse.json({ message: "Book added successfully!" }, { status: 200 });
}

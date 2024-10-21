-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "n_pages" INTEGER NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

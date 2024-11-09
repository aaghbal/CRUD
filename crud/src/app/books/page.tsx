import { DialogBook } from "@/components/dialogForm";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Book } from "@/components/dialogForm";
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton"; // Import DeleteButton component

const prisma = new PrismaClient();

const delBook = async (bookId: number) => {
  "use server";
  await prisma.book.delete({
    where: {
      id: bookId,
    },
  });

  revalidatePath("/books");
};

export default async function BookList() {
  const books = await prisma.book.findMany();
  return (
    <section className="flex justify-center items-center space-y-2 flex-col h-screen space-x-12 bg-primary bg-cover">
      <div className="ml-[65%] flex space-x-3">
        <Link href="/AddBook">
          <button className="bg-green-500 p-2 rounded-[10px]">Add Book</button>
        </Link>
        <Link href="/">
          <button className="bg-blue-500 p-2 rounded-[10px]">Home</button>
        </Link>
      </div>
      <div className="border-2 border-white border-opacity-25 rounded-2xl w-3/4 h-4/5 bg-black/50 p-6 overflow-y-auto no-scrollbar">
        <table className="min-w-full divide-y divide-white/30 bg-black bg-opacity-15">
          <thead className="sticky top-0 bg-black z-10">
            <tr className="bg-black bg-opacity-30">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Author</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Genre</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Language</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider pl-[10%]">Action</th>
            </tr>
          </thead>

          <tbody className="bg-black bg-opacity-25 divide-y divide-orange-400/20">
            {books.map((book: Book) => (
              <tr key={book.id} className="hover:bg-black">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{book.genre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{book.language}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  <div className="flex justify-center items-center space-x-2">
                    <DeleteButton bookId={book.id} onDelete={delBook} />
                    <DialogBook book={book} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

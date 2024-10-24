import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"; 
const prisma = new PrismaClient();
import Link from "next/link";

export default function AddBook() {

  const AddBook = async (formData: FormData) => {
    "use server";
    const title = formData.get('title');
    const author = formData.get('author');
    const genre = formData.get('genre');
    const language = formData.get('language');

    await prisma.book.create({
      data: {
        title,
        author,
        genre,
        language,
      },
    });
    revalidatePath('/books');
    redirect('/books');
  }

  return (
    <section className="flex justify-center items-center flex-col space-y-5 h-screen bg-primary bg-cover">
      <Link href="/"><button className="bg-blue-500 p-3 rounded-[10px]">Home</button></Link>
      <form action={AddBook} className="flex flex-col space-y-4 p-8 bg-black/70 rounded-[30px] shadow-lg w-96">
        <h2 className="text-2xl font-bold text-white mb-4 ml-4">Add a New Book</h2>
        <input 
          type="text" 
          placeholder="Title" 
          name="title" 
          required  
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20  text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Author" 
          name='author'  
          required  
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Genre"  
          name='genre' 
          required 
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="text" 
          placeholder="Language" 
          name='language' 
          required  
          className="border border-gray-600 p-3 rounded-[30px] bg-orange-400/20 text-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white py-3 rounded-[20px] hover:bg-blue-600  transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
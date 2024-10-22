import Link from "next/link";

export default function HomeChoix() {
    return (
      <section className="flex justify-center items-center flex-row h-screen space-x-12">
        <Link href="/books" className="border-2 border-white border-opacity-25 w-[20%] h-[30%] rounded-[30px] relative group">
          <div className="absolute inset-0 flex justify-center items-end bg-book bg-cover rounded-[30px] group-hover:blur-sm">
            <span className="text-yellow-400 text-[50px] font-bold italic mb-8 group-hover:hidden">Books</span>
          </div>
          <div className="absolute inset-0 flex justify-center items-end">
            <span className="text-yellow-400 text-[50px] italic mb-[25%] font-bold hidden group-hover:block">List of books</span>
          </div>
        </Link>
        <Link href="/AddBook" className="border-2 border-white border-opacity-25 w-[20%] h-[30%] rounded-[30px] relative group">
          <div className="absolute inset-0 flex justify-center items-end bg-addbook bg-cover rounded-[30px] group-hover:blur-sm">
            <span className="text-yellow-400 text-[50px] italic font-bold mb-8 group-hover:hidden">Add Book</span>
          </div>
          <div className="absolute inset-0 flex justify-center items-end">
            <span className="text-yellow-400 text-[50px] font-bold italic mb-[25%] hidden group-hover:block">Create</span>
          </div>
        </Link>
       
      </section>
    );
  }
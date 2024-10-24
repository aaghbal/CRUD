import Link from "next/link";

export default function HomeChoix() {
    return (
      <section className=" flex justify-center items-center flex-col space-y-6 bg-primary bg-cover h-screen">
        <h1 className="text-[50px] font-bold text-yellow-400">Welcome To The Library</h1>
        <div className="flex justify-center items-center flex-col lg:space-x-12 lg:flex-row">
        <Link href="/books" className="border-2 border-white border-opacity-25 w-[450px] h-[350px] rounded-[30px] relative group">
          <div className="absolute inset-0 flex justify-center items-end bg-book bg-cover rounded-[30px] group-hover:blur-sm">
            <span className="text-yellow-400 text-[30px] font-bold italic mb-8 group-hover:hidden">Books</span>
          </div>
          <div className="absolute inset-0 flex justify-center items-end">
            <span className="text-yellow-400 text-[30px] italic mb-[30%] font-bold hidden group-hover:block">Books</span>
          </div>
        </Link>
        <Link href="/AddBook" className="border-2 border-white border-opacity-25 w-[450px] h-[350px] rounded-[30px] relative group">
          <div className="absolute inset-0 flex justify-center items-end bg-addbook bg-cover rounded-[30px] group-hover:blur-sm">
            <span className="text-yellow-400 text-[30px] italic font-bold mb-8 group-hover:hidden">Add Book</span>
          </div>
          <div className="absolute inset-0 flex justify-center items-end">
            <span className="text-yellow-400 text-[30px] font-bold italic mb-[30%] hidden group-hover:block">Add Book</span>
          </div>
        </Link>
        </div>
      </section>
    );
  }
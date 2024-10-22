"use client";

import { useEffect, useState } from 'react';

interface Book {
  id: number; 
  title: string;
  author: string;
  genre: string;
  n_page: number; 
  language: string;
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log the fetched data
        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          console.error('Fetched data is not an array');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Pages: {book.n_page}</p>
            <p>Language: {book.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className="flex justify-center items-center flex-row h-screen space-x-12">
//       <div className="border-2 border-white border-opacity-25 rounded-[30px] w-[70%] h-[80%]">
//           <table className="border border-yellow-300 w-[100%]">
//             <thead>
//               <tr className="border border-red-600 h-[50px]">
//                 <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">title</span></td>
//                 <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">author</span></td>
//                 <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">genre</span></td>
//                 <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">N page</span></td>
//                 <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">language</span></td>
//                 <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">action</span></td>
//               </tr>
//             </thead>

//             <tbody>
//             <tr className="border border-red-600 h-[50px]">
//               <td className="border border-green-500  "><span className="flex justify-center items-center ">title</span></td>
//               <td className="border border-green-500  "><span className="flex justify-center items-center ">author</span></td>
//               <td className="border border-green-500  "><span className="flex justify-center items-center ">genre</span></td>
//               <td className="border border-green-500  "><span className="flex justify-center items-center ">N page</span></td>
//               <td className="border border-green-500  "><span className="flex justify-center items-center ">language</span></td>
//               <td className="border border-green-500 ">
//                 <div className="flex justify-center items-center space-x-2">
//                   <Link href="" className="bg-red-500 text-white p-2 rounded-md text-sm"><button>Remove</button></Link>
//                   <Link href="" className="bg-blue-500 text-white p-2 rounded-md text-sm"><button>Update</button></Link>
//                 </div>
//                 </td>
      
//             </tr>
//             </tbody>
//           </table>
//       </div>
//     </section>
//   );
// }
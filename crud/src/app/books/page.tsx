"use client";

import { update } from '@/actions/update';
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
  const [editingBook, setEditingBook] = useState<Book | null>(null); 
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedAuthor, setUpdatedAuthor] = useState('');
  const [updatedGenre, setUpdatedGenre] = useState('');
  const [updatedLanguage, setUpdatedLanguage] = useState('');

  const handleEditClick = (book: Book) => {
    setEditingBook(book); 
    setUpdatedTitle(book.title);
    setUpdatedAuthor(book.author);
    setUpdatedGenre(book.genre);
    setUpdatedLanguage(book.language);
  };

  const handleUpdateSubmit = async () => {
    if (!editingBook) return;
  
    const updatedBookData = {
      id: editingBook.id,
      title: updatedTitle,
      author: updatedAuthor,
      genre: updatedGenre,
      language: updatedLanguage,
    };

    const updatedBook = await update(updatedBookData, editingBook.id);
    setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
          )
        );
    setEditingBook(null); 
  };
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/book');
        console.log('response', response);
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
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
          <section className="flex justify-center items-center flex-row h-screen space-x-12">
            <div className="border-2 border-white border-opacity-25 rounded-[30px] w-[70%] h-[80%]">
                <table className="border border-yellow-300 w-[100%]">
                  <thead>
                    <tr className="border border-red-600 h-[50px]">
                      <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">title</span></td>
                      <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">author</span></td>
                      <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">genre</span></td>
                      <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">language</span></td>
                      <td className="border border-green-500  "><span className="flex justify-center items-center font-bold text-2xl">action</span></td>
                    </tr>
                  </thead>
      
                  <tbody>
                  {books.map((book, index) => (
                        <tr key={index} className="border border-red-600 h-[50px]">
                          <td className="border border-green-500"><span className="flex justify-center items-center">{book.title}</span></td>
                          <td className="border border-green-500"><span className="flex justify-center items-center">{book.author}</span></td>
                          <td className="border border-green-500"><span className="flex justify-center items-center">{book.genre}</span></td>
                          <td className="border border-green-500"><span className="flex justify-center items-center">{book.language}</span></td>
                          <td className="border border-green-500">
                            <div className="flex justify-center items-center space-x-2">
                            <button  onClick={() => handleEditClick(book)}   className="bg-blue-500 text-white p-2 rounded-md text-sm">Update</button>
                              <button  className="bg-red-600 text-white p-2 rounded-md text-sm">Remove</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {editingBook && (
                          <form onSubmit={handleUpdateSubmit}>
                            <input
                              type="text"
                              value={updatedTitle}
                              onChange={(e) => setUpdatedTitle(e.target.value)}
                              placeholder="Title"
                            />
                            <input
                              type="text"
                              value={updatedAuthor}
                              onChange={(e) => setUpdatedAuthor(e.target.value)}
                              placeholder="Author"
                            />
                            <input
                              type="text"
                              value={updatedGenre}
                              onChange={(e) => setUpdatedGenre(e.target.value)}
                              placeholder="Genre"
                            />
                            <input
                              type="text"
                              value={updatedLanguage}
                              onChange={(e) => setUpdatedLanguage(e.target.value)}
                              placeholder="Language"
                            />
                            <button type="submit">Save Changes</button>
                          </form>
                        )}
            </div>
          </section>
        );
};

export default BookList;

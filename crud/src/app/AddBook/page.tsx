'use client'

import React from 'react'
import { useState } from 'react'

export default  function AddBook() {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [nPage, setNPage] = useState('')
    const [language, setLanguage] = useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const bookData = {
          title,
          author,
          genre,
          nPage,
          language,
        };
        console.log('Book data:', bookData);
        try {
            const response = await fetch('/api/book', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(bookData),
            });
      
            if (response.ok) {
              const result = await response.json();
              console.log('Book saved:', result);
      
              setTitle('');
              setAuthor('');
              setGenre('');
              setNPage('');
              setLanguage('');
            } else {
              console.error('Failed to save the book');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
  return (
      <form onSubmit={handleSubmit} className='flex flex-col space-y-3 justify-center items-center h-screen'>
        <input type="text"  placeholder='title' value={title} required onChange={(e) => setTitle(e.target.value)} className='border border-white border-opacity-30 p-2 rounded-lg bg-slate-500 bg-opacity-25'/>
        <input type="text"  placeholder='author' value={author}  required onChange={(e) => setAuthor(e.target.value)} className='border border-white border-opacity-30 p-2 rounded-lg bg-slate-500 bg-opacity-25'/>
        <input type="text"  placeholder='genre' value={genre} required onChange={(e) => setGenre(e.target.value)} className='border border-white border-opacity-30 p-2 rounded-lg bg-slate-500 bg-opacity-25'/>
        <input type="number"  placeholder='nPage' value={nPage} required onChange={(e) => setNPage(e.target.value)} className='border border-white border-opacity-30 p-2 rounded-lg bg-slate-500 bg-opacity-25'/>
        <input type="text"  placeholder='language' value={language} required onChange={(e) => setLanguage(e.target.value)} className='border border-white border-opacity-30 p-2 rounded-lg bg-slate-500 bg-opacity-25'/>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
    </form>
  )
}

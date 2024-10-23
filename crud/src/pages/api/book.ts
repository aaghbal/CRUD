import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req.method', req.method);

    if (req.method === 'POST') {
        const { title, author, genre, language } = req.body;

        console.log('title', title);
        console.log('author', author);
        console.log('genre', genre);
        console.log('language', language);
        
        try {
            const newBook = await prisma.book.create({
                data: {
                    title,
                    author,
                    genre,
                    language,
                },
            });
            console.log('newBook', newBook);
            res.status(201).json(newBook); 
        } catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ error: 'Failed to create book' });
        }
    } else if (req.method === 'GET') {
        try {
            const books = await prisma.book.findMany(); 
            res.status(200).json(books); 
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Failed to fetch books' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']); 
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

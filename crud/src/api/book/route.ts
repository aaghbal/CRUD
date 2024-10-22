import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { title, author, genre, nPage, language } = req.body;
        try {
            const book = await prisma.book.create({
                data: {
                    title,
                    author,
                    genre,
                    n_page: nPage,
                    language,
                },
            });
            res.status(201).json(book);
        } catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ message: 'Failed to create book' });
        }
    }else if (req.method === 'GET') {
        try {
            const books = await prisma.book.findMany(); 
            console.log('Books:', books);
            res.status(200).json(books);
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ message: 'Failed to fetch books' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
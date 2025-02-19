import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books,  setBooks] = useState([])

    useEffect(()=> {
        fetch('./public/booksData.json')
        .then(res => res.json())
        .then (data => setBooks(data))
    } , [])

    return (
        <div>
            <h2 className="text-6xl font-bold text-center mt-24 mb-10">Books : {books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 " > 
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;


/**
 *  1. state to store books
 *  2. useEffect 
 *  3. fetch to load data
 *  4. set the date to the books state
 *
 * 
 */
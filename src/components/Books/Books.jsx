import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

	const [books, setBooks] = useState([]);

	useEffect(()=>{
		fetch('./booksData.json')
			.then(res => res.json())
			.then(data => {
				setBooks(data);
			})
	},[])
	return (
		<div className='mt-8'>
			<h2 className="text-4xl font-bold text-center">Books</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-8 bg-gradient-to-l from-red-200 to-teal-200 rounded-lg p-4'>
				{
					books.map(book => <Book 
						key={book.bookId} 
						book={book}
						></Book>)
				}
			</div>
		</div>
	);
};

export default Books;
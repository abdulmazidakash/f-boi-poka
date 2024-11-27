import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utils/utils';
import Book from '../Book/Book';

const ListedBooks = () => {

	const [readList, setReadList] = useState([]);
	const [sort, setSort] = useState('');

	const allBooks = useLoaderData();

	useEffect(() =>{
		const storedReadList = getStoredReadList();
		const storedReadListInt = storedReadList.map(id => parseInt(id));

		//worst way
		// console.log(storedReadList, storedReadListInt, allBooks);

		// 
		const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
		setReadList(readBookList);
	}, [])

	const handleSort = sortType =>{
		setSort(sortType);

		//
		if(sortType === 'no of pages'){
			const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
			setReadList(sortedReadList);
		}

		//sort rating
		if(sortType === 'Rating'){
			const sortedReadList = [...readList].sort((a, b) => a.rating = b.rating);
			setReadList(sortedReadList);
		}
	}
	return (
		<div>
			<h2>listed books</h2>

			<div className="dropdown">
				<div tabIndex={0} role="button" className="btn m-1">
					{sort ? `${sort}`  : 'Sort by'}
				</div>
				<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
					<li onClick={() => handleSort('Rating')}><a>Rating</a></li>
					<li onClick={() => handleSort('no of pages')}><a>No fo Pages</a></li>
				</ul>
			</div>


			<Tabs>
				<TabList>
				<Tab>Read List</Tab>
				<Tab>Wish List</Tab>
				</TabList>

				<TabPanel>
					<h2 className='text-2xl'>Books I Read: {readList.length}</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
						{
							readList.map(book => <Book key={book.bookId} book={book}></Book>)
						}
					</div>
				</TabPanel>
				<TabPanel>
				<h2 className='text-2xl'>My Wish List</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ListedBooks;
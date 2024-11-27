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
			const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
			setReadList(sortedReadList);
		}
	}
	return (
		<div>
			<h2 className='text-center text-4xl font-extrabold text-green-700 my-8'>listed books</h2>

			<div className="dropdown">
				<div tabIndex={0} role="button" className="btn m-1 bg-gradient-to-l from-emerald-600 to-pink-700 font-semibold text-white my-4">
					{sort ? `${sort}`  : 'Sort by'}
				</div>
				<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
					<li onClick={() => handleSort('Rating')}><a>Rating</a></li>
					<li onClick={() => handleSort('no of pages')}><a>No fo Pages</a></li>
				</ul>
			</div>


			<Tabs className='font-semibold'>
				<TabList>
				<Tab>Read List</Tab>
				<Tab>Wish List</Tab>
				</TabList>

				<TabPanel>
					<h2 className='text-2xl btn bg-gradient-to-t from-yellow-600 to-indigo-700 text-white mt-4'>Books I Read: {readList.length}</h2>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4 bg-gradient-to-t from-emerald-200 to-orange-100 p-4 rounded-lg my-8'>
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
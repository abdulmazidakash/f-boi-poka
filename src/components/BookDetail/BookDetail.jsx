import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utils/utils";
import { toast } from "react-toastify";


const BookDetail = () => {

	const {bookId} = useParams();
	// console.log(bookId);

	const data = useLoaderData();
	const id = parseInt(bookId)

	const book = data.find(book => book.bookId === id);

	const {bookId: currentBookId, image} = book;

	const handleMarkAsRead = (id) =>{
		addToStoredReadList(id)

		toast('This book added to your read list')
	}
	return (
		<div>
			<h2>Book Details: {bookId} </h2>
			<img src={image} className="w-36 rounded-lg" alt="" />
			<br />
			<div className="">
				<button onClick={() => handleMarkAsRead(bookId)} className="btn-outline btn btn-accent">Mark as Read</button>
				<button className="btn-outline btn btn-accent ml-2">Wishlist</button>
			</div>

		</div>
	);
};

export default BookDetail;
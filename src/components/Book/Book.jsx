import { Link } from "react-router-dom";


const Book = ({book}) => {

	const { image, author, bookName, tags, bookId, category, rating, totalPages} = book;

	return (
		<div>
			<Link to={`/books/${bookId}`}>
				<div className="card bg-base-100  p-6 flex-grow  shadow-xl">
					<figure className="bg-slate-200 rounded-lg">
						<img
						src={image} className="w-[166px] h-[200px] rounded-lg p-6"
						alt="Shoes" />
					</figure>
					
					<div className="mt-2 items-center text-center">
							{
								tags.map((tag, index) => <button 
								key={index}
								className="badge  bg-green-100 text-green-700 p-4 ml-2 font-semibold">{tag}</button>)
							}
						</div>
					<div className="card-body p-0">
						
						<h2 className="card-title mt-2" title={bookName}>
						{bookName.slice(0,12)}

						</h2>
						<p>{author}</p>

						<div className="border-t border-dashed bg-gray-600 mt-2"></div>

						<div className=" justify-between items-center flex">
							<div className="badge badge-outline">{category}</div>


							<div className="rating">
							<div className="mr-2">{rating}</div>
								<input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500 text-sm" />
							</div>
							
							</div>
							<div className="border-t border-dashed bg-gray-600"></div>
							<div className="text-center font-semibold">Total Page: {totalPages}</div>
					</div>
					</div>
			</Link>
		</div>
	);
};

export default Book;
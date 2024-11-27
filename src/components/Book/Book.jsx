import { Link } from "react-router-dom";


const Book = ({book}) => {

	const { image, author, bookName, tags, bookId, category, rating, totalPages} = book;

	return (
		<div>
			<Link to={`/books/${bookId}`}>
				<div className="card bg-base-100  p-6 flex-grow  shadow-xl">
					<figure className="bg-slate-200 rounded-lg">
						<img
						src={image} className="w-[166px] h-[200px] rounded-lg p-2"
						alt="Shoes" />
					</figure>
					
					<div className="mt-2 items-center">
							{
								tags.map((tag, index) => <button 
								key={index}
								className="btn btn-xs bg-green-500 p-4 ml-2">{tags}</button>)
							}
						</div>
					<div className="card-body">
						
						<h2 className="card-title">
						{bookName}
						<div className="badge badge-secondary">NEW</div>
						</h2>
						<p>{author}</p>

						<div className="border-t border-dashed bg-gray-600"></div>
						<div className=" justify-between items-center flex">
							<div className="badge badge-outline">{category}</div>
							<div>{rating}</div>
							<div>{totalPages}</div>
								<div className="rating rating-md rating-half">
									<input type="radio" name="rating-10" className="rating-hidden" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
									<input
										type="radio"
										name="rating-10"
										className="mask mask-star-2 mask-half-1 bg-green-500"
										defaultChecked />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
									<input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
								</div>
							</div>
					</div>
					</div>
			</Link>
		</div>
	);
};

export default Book;
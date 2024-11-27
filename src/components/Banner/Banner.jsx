import bannerImg from '../../assets/books.jpg'

const Banner = () => {
	return (
		<div>
			<div className="hero bg-gradient-to-t from-emerald-200 to-orange-200 rounded-lg">
				<div className="hero-content w-full flex-col justify-between lg:flex-row-reverse">
					<img
					src={bannerImg}
					className=" rounded-lg shadow-2xl" />
					<div className='text-center'>
					<h1 className="text-5xl font-bold text-center">Books to freshen up your bookshelf</h1>

					<button className="my-8 font-semibold bg-gradient-to-tr from-emerald-400 to-cyan-600 btn text-white text-center ">View The List</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
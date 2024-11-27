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
					<h1 className="text-5xl font-bold text-center">Box Office News!</h1>

					<button className="btn btn-primary mt-4 bg-gradient-to-r from-emerald-700 to-rose-700 text-center">Get Started</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
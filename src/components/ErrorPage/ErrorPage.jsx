import { Link } from "react-router-dom";


const ErrorPage = () => {
	return (
		<div className="text-center">
			<h2 className="text-6xl text-red-500">Page Not Found</h2>
			<h3 className="text-6xl text-red-500">404</h3>
			
			<Link to='/' className="btn btn-outline btn-accent">Go Back Home</Link>

		</div>
	);
};

export default ErrorPage;
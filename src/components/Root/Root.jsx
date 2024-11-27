import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
	return (
		<div>

			<Navbar></Navbar>
			<div className="max-w-6xl mx-auto my-8">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Root;
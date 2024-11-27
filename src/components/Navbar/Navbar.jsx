import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

	const links = <>
		<NavLink className='font-semibold bg-gradient-to-tr from-emerald-400 to-cyan-600 btn'  to='/'>Home</NavLink>
		<NavLink className='ml-4 font-semibold bg-gradient-to-tr from-emerald-400 to-cyan-600 btn' to='/dashboard'>Dashboard</NavLink>
		<NavLink className='ml-4 font-semibold bg-gradient-to-tr from-emerald-400 to-cyan-600 btn' to='/listedBooks'>Listed Books</NavLink>

	</>
	return (
		<div className="bg-gradient-to-r from-emerald-200 to-red-200 mb-4 rounded-b-lg">
			<div className="navbar max-w-6xl mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ml-4">
						{links}
					</ul>
					</div>
					<a className="btn bg-gradient-to-r from-emerald-400 to-green-500 text-xl">Boi-Poka</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 ">
						{links}
					</ul>
				</div>
				<div className="navbar-end">
					<a className="btn bg-gradient-to-t from-sky-500 to-yellow-600">Button</a>
				</div>
				</div>
		</div>
	);
};

export default Navbar;
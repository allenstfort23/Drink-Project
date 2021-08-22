import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-color mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1" href="#">
					<i className="pl-3 fas fa-glass-martini-alt fa-2x logo-color" />
				</span>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<div className=" ml-auto pl-5">
					<ul className=" navbar-nav navbar-nav-item pl-5 mr-auto">
						<li className="nav-item active">
							<Link to="/" className="nav-link item-color" aria-current="page" href="#">
								Sign In
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link item-color" href="#">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link item-color" href="#">
								Contact
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/account" className="nav-link item-color" href="#">
								Account
							</Link>
						</li>
						{/* <li className="list-inline-item">
							<Link className="nav-link item-color" href="#">
								Account
							</Link>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};

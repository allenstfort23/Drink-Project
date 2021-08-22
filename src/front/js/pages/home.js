import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="container">
				<ul className="nav d-flex justify-content-center" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<a
							className="nav-link active"
							id="home-tab"
							data-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							<h5 className="login-text">Sign Up</h5>
						</a>
					</li>
					<li className="nav-item" role="presentation">
						<a
							className="nav-link"
							id="profile-tab"
							data-toggle="tab"
							href="#profile"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							<h5 className="login-text">Log In</h5>
						</a>
					</li>
				</ul>
				<div className="form input d-flex justify-content-center">
					<form>
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id="exampleInputEmail1-default">
									<i className="fas fa-envelope-square inline" />
								</span>
							</div>

							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-label="Sizing example input"
								aria-describedby="exampleInputEmail1-default"
								placeholder="Email address"
							/>
							{/* id="exampleInputEmail1" */}
						</div>
						<div className="form input d-flex mb-4 justify">
							<div className="input-group-prepend">
								<span className="input-group-text" id="passwordInputPassword-default">
									<i className="fas fa-lock inline" />
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								aria-label="Sizing example input"
								aria-describedby="passwordInputPassword-default"
								placeholder="Password"
							/>
						</div>
						{/* <div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div> */}
						<button type="submit" className="btn btn-lg sign-in-btn">
							Sign In
						</button>
					</form>
				</div>
				<div className="mt-3 mb-3">
					<span className="col-6">
						<a href="#">Forgot Username</a>
					</span>
					<span className="col-6">
						<a href="#">Forgot Password</a>
					</span>
				</div>
			</div>
		</div>
	);
};

{
	/* THIS IS THE OLD LAYOUT THAT IS PLACED AFTER THE TECT-CENTER DIV
	<div className="media sign-in picture">
				<img
					className="align-self-center mr-3"
					src="https://miro.medium.com/max/1000/1*y-_byCrjIpAhg0SrHjIRTg.jpeg"
					width="50%"
				/>
				<div className="form input mt-5 pl-5">
					<form className="">
						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Email address"
							/>
							<small id="emailHelp" className="form-text text-muted">
								We&apos;ll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div>
						<button type="submit" className="btn btn-lg">
							Sign In
						</button>
					</form>
				</div>
			</div> */
}

import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
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
			</div>
		</div>
	);
};

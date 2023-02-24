import React from "react";
import { auth, provider } from "../config/firebase.js";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
	const navigate = useNavigate();
	async function signIn() {
		const result = await signInWithPopup(auth, provider);
		navigate("/");
	}
	return (
		<div className="text-xl font-medium  ">
			<p className="m-10"> Sign in with google</p>
			<button
				onClick={signIn}
				className="w-20 h-10 bg-teal-500 rounded-xl text-white text-sm">
				Sign in
			</button>
		</div>
	);
};

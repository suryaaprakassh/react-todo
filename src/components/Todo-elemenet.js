import React from "react";

export const Todoeleement = ({ task }) => {
	return (
		<div className="my-3 p-3 max-w-sm mx-auto bg-orange-300 rounded-xl shadow-lg flex items-center justify-around space-x-4">
			<h2>{task}</h2>
			<button className="btn text-white text-sm w-5 h-7 rounded-sm bg-red-500">
				<i className="fa fa-trash"></i>
			</button>
		</div>
	);
};

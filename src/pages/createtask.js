import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";
import Todos from "../components/Todo.js";
export const CreateTask = ({ user }) => {
	const schema = yup.object().shape({
		task: yup.string().required("Fuck a task bro.."),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const taskRef = collection(db, "tasks");
	async function createTask(data) {
		await addDoc(taskRef, {
			id: user?.uid,
			iscomplete: false,
			task: data.task,
		});
		reset();
	}
	return (
		<div id="main">
			<div className="felx space-x-5">
				<form onSubmit={handleSubmit(createTask)}>
					<input
						type="text"
						placeholder="Task.."
						className="p-2"
						{...register("task")}
					/>
					<input
						type="submit"
						className="w-50 h-10 bg-cyan-500 text-white rounded-lg px-3"
					/>
					<p style={{ color: "red" }}>{errors.task?.message}</p>
				</form>
			</div>
			<Todos />
		</div>
	);
};

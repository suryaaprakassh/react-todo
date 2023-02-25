import React from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { Todoeleement } from "./Todo-elemenet";
export default function Todos({ changeNo }) {
	const tastRef = collection(db, "tasks");
	const [tasks, setTasks] = useState(null);
	useEffect(() => {
		const getPost = async () => {
			const data = await getDocs(tastRef);
			setTasks(data.docs.map((doc) => ({ id: doc.id, task: doc.data().task })));
			console.log("read from database");
		};
		getPost();
	}, [changeNo]);
	return (
		<div className="my-5 flex-row justify-center text-lg font-medium">
			{tasks &&
				tasks.map((task) => (
					<Todoeleement
						key={task.id}
						task={task.task}
						btnfucntion={async () => {
							setTasks(tasks.filter((current) => current !== task));
							await deleteDoc(doc(db, "tasks", task.id));
						}}
					/>
				))}
		</div>
	);
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Login } from "./pages/Login.js";
import { Navbar } from "./components/Navbar.js";
import { CreateTask } from "./pages/createtask.js";
import { auth } from "./config/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
export default function App() {
	const [user] = useAuthState(auth);
	return (
		<div>
			<Router>
				<Navbar user={user} />
				<Routes>
					<Route path="/" element={<Home user={user} />} />
					<Route path="/login" element={<Login />} />
					<Route path="/tasks" element={<CreateTask user={user} />} />
				</Routes>
			</Router>
		</div>
	);
}

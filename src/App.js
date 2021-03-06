import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Experience from "./Pages/Experience/Experience";
import Projects from "./Pages/Projects/Projects";
import SelfEdu from "./Pages/SelfEdu/SelfEdu";
import Page404 from "./Pages/404/404";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className={"App"}>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/self-education" element={<SelfEdu />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;

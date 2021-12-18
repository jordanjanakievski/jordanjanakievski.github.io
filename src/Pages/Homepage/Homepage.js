import React from "react";
import "./Homepage.css";

function About() {
	return (
		<div className={"content"}>
			<img src={"profile.jpg"} className={"profile"} />
			<h2>Hello, my name is Jordan Janakievski.</h2>{" "}
			<h2>
				I am a computer science student, aspiring developer, and machine
				learning enthusiast.
			</h2>
			<p>
				I am currently pursuing a Bachelor of Science in Computer Science at the
				University of Toronto. My current interests include web development,
				artificial intelligence, and ethical applications of software.
			</p>
		</div>
	);
}

export default About;

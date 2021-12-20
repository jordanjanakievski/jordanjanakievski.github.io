import React from "react";
import "./Homepage.css";

function About() {
	return (
		<div className={"content"}>
			<img src={"profile.jpg"} className={"profile"} />
			<h2 id={"center"}>Hello, my name is Jordan Janakievski.</h2>
			<h2 id={"center"}>
				I am a computer science student, aspiring developer, and machine
				learning enthusiast.
			</h2>
		</div>
	);
}

export default About;

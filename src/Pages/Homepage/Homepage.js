import React from "react";
import "./Homepage.css";

function Page() {
	return (
		<div className="main-container">
			<div className="hero">
				<h3>curious</h3>
				<h1>
					Student &<br /> Developer
				</h1>
				<h4>I am a computer science student at the University of Toronto</h4>
			</div>
			<div className="about">
				<h2>About</h2>
				<p>
					My name is Jordan Janakievski. <br /> <br /> I use my passion for
					technology to create unique solutions to challenges we face. I try to
					open my mind to some of the world's greatest thinkers to broadened my
					perspectives, help me develop as a person, and be a better
					communicator.
				</p>
			</div>
			<div className="projects">
				<h2>Projects</h2>
				<p>
					1. Project 1 <br />
					2. Project 2 <br />
					3. Project 3
				</p>
			</div>
			<div className="contact">
				<h2>Contact Me</h2>
			</div>
		</div>
	);
}

export default Page;

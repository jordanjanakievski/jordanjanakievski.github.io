import React from "react";
import "./Projects.css";
import jsonProjects from "./Projects.json";
import Card from "react-bootstrap/Card";
import { IoGitBranch } from "react-icons/io5";

function Projects() {
	return (
		<div className={"content"}>
			<h2>{"> Recent Projects"}</h2>
			<p>
				Here are some of my recent projects, both personal and team. I have been
				able to learn new skills from each one while also reinforcing previously
				learned topics. The chance to work with a team has taught me the value
				of clear communication and I have been able to bring those skills into
				my personal projects.
			</p>
			<br />
			<div>{Project(jsonProjects)}</div>
		</div>
	);
}

function Project(data) {
	let projects = [];
	for (let key in data) {
		projects.push(
			<Card>
				<Card.Body>
					<Card.Img
						variant={"top"}
						src={data[key].image}
						id={"plankton-eye-image"}
					/>
					<h2>{key}</h2>
					<a href={data[key].link} className={"version"}>
						<IoGitBranch size={20} />
						{data[key].version}
					</a>
					<Card.Text>{data[key].description}</Card.Text>
				</Card.Body>
			</Card>
		);
	}
	let projectList = projects.map(function (project) {
		return project;
	});
	return projectList;
}

export default Projects;

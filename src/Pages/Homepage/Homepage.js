import React from "react";
import { Card, Container } from "react-bootstrap";
import { IoMail } from "react-icons/io5";
import { GiScubaTanks } from "react-icons/gi";
import {
	SiCss3,
	SiExpress,
	SiFlutter,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiNodedotjs,
	SiNotion,
	SiPython,
	SiReact,
	SiTensorflow,
	SiTypescript,
} from "react-icons/si";
import projectsDB from "./projectsDatabase.json";
import certificationsDB from "./certificationsDatabase.json";
import "./Homepage.css";

function Homepage() {
	return (
		<div>
			<div>{Hero()}</div>
			{About()}
			<div id="projects">{Projects()}</div>
			<div id="contact">{Contact()}</div>
		</div>
	);
}

// Hero Section of the page
function Hero() {
	return (
		<Container className="hero-container">
			<h3>curious</h3>
			<Container className="hero-flex">
				<h1 className="hero-title">
					Student & <br /> Developer
				</h1>
				<Container className="memoji-container">
					<img
						src="memoji.png"
						className="memoji"
						alt="Memoji of Jordan using a MacBook"
					/>
				</Container>
			</Container>
			<h4>at the University of Toronto</h4>
		</Container>
	);
}

// About Section of the page
function About() {
	return (
		<Container className="about-container" id="about">
			<h2>About</h2>
			<p>My name is Jordan Janakievski.</p>
			<p>
				I use my passion for technology to create unique solutions to challenges
				we face. I try to open my mind to some of the world's greatest thinkers
				to broadened my perspectives, help me develop as a person, and be a
				better communicator.
			</p>
			<p>
				Apart from personal development, I have a budding interest in mechanical
				watches and have been a life-long fan of Star Wars. You can also find me
				building with LEGOs when I have a creative impulse.
			</p>
			<h6>Certifications</h6>
			<Container className="card-container">
				{ProjectCards(certificationsDB)}
			</Container>
		</Container>
	);
}

// Projects Section of the page
function Projects() {
	return (
		<Container className="projects-container">
			<h2>Projects</h2>
			<Container className="card-container">
				{ProjectCards(projectsDB)}
			</Container>
		</Container>
	);
}

// Contact Section of the page
function Contact() {
	return (
		<Container className="contact-container">
			<h2>Contact</h2>
			<a
				href="mailto:jordan.a.janakievski@gmail.com"
				className="contact-button"
			>
				<IoMail size={100} className="mail" />
			</a>
		</Container>
	);
}

// Helper Functions

// Project Card Creation Function
function ProjectCards(data) {
	let projects = [];
	for (let key in data) {
		projects.push(
			<Card id="project-card">
				<a href={data[key].link}>
					<Card.Body id="project-card-body">
						<h5>{key}</h5>
						{IconsToUse(data[key])}
					</Card.Body>
				</a>
			</Card>
		);
	}
	let projectList = projects.map(function (project) {
		return project;
	});
	return projectList;
}

// Create Icons for Project Cards
function IconsToUse(data) {
	let icons = [];
	for (let icon in data.icons) {
		if (data.icons[icon] === "Python") {
			icons.push(<SiPython size={25} className="icon" />);
		} else if (data.icons[icon] === "Tensorflow") {
			icons.push(<SiTensorflow size={25} className="icon" />);
		} else if (data.icons[icon] === "TypeScript") {
			icons.push(<SiTypescript size={25} className="icon" />);
		} else if (data.icons[icon] === "Flutter") {
			icons.push(<SiFlutter size={25} className="icon" />);
		} else if (data.icons[icon] === "Express") {
			icons.push(<SiExpress size={25} className="icon" />);
		} else if (data.icons[icon] === "HTML") {
			icons.push(<SiHtml5 size={25} className="icon" />);
		} else if (data.icons[icon] === "CSS") {
			icons.push(<SiCss3 size={25} className="icon" />);
		} else if (data.icons[icon] === "JavaScript") {
			icons.push(<SiJavascript size={25} className="icon" />);
		} else if (data.icons[icon] === "React") {
			icons.push(<SiReact size={25} className="icon" />);
		} else if (data.icons[icon] === "MongoDB") {
			icons.push(<SiMongodb size={25} className="icon" />);
		} else if (data.icons[icon] === "Notion") {
			icons.push(<SiNotion size={25} className="icon" />);
		} else if (data.icons[icon] === "Node") {
			icons.push(<SiNodedotjs size={25} className="icon" />);
		} else if (data.icons[icon] === "Scuba Tanks") {
			icons.push(<GiScubaTanks size={25} className="icon" />);
		}
	}
	let iconList = icons.map(function (icon) {
		return icon;
	});
	return iconList;
}

export default Homepage;

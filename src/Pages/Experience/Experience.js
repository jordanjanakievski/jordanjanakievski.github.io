import React from "react";
import "./Experience.css";
import jsonEducation from "./Education.json";
import jsonExperience from "./Experience.json";
import {
	IoLogoJavascript,
	IoLogoReact,
	IoLogoPython,
	IoEllipseOutline,
	IoEllipse,
} from "react-icons/io5";
import { DiJava } from "react-icons/di";
import { RiFlutterFill } from "react-icons/ri";

function About() {
	return (
		<div className={"content"}>
			<h2>{"> Education"}</h2>
			<p>
				I am currently pursuing a Bachelor of Science in Computer Science at the
				University of Toronto. My current interests include web development,
				artificial intelligence, and the ethical applications of software.
			</p>
			{Education(jsonEducation)}
			<h2>{"> Work"}</h2>
			{Experience(jsonExperience)}
			<h2>{"> Programming"}</h2>
			<div>
				<p>
					<RiFlutterFill size={20} color="#d1d0c5" /> Flutter
					<p className={"rating"}>
						{Rating(1)} <br /> Beginner
					</p>
				</p>
				<p>
					<DiJava size={20} color="#d1d0c5" /> Java
					<p className={"rating"}>
						{Rating(3)} <br /> Intermediate
					</p>
				</p>
				<p>
					<IoLogoJavascript size={20} color="#d1d0c5" /> JavaScript
					<p className={"rating"}>
						{Rating(2)} <br /> Beginner
					</p>
				</p>
				<p>
					<IoLogoPython size={20} color="#d1d0c5" /> Python
					<p className={"rating"}>
						{Rating(3)} <br /> Intermediate
					</p>
				</p>
				<p>
					<IoLogoReact size={20} color="#d1d0c5" /> React
					<p className={"rating"}>
						{Rating(2)} <br /> Beginner
					</p>
				</p>
			</div>
		</div>
	);
}

function Education(data) {
	let institutions = [];
	for (let key in data) {
		institutions.push(
			<div>
				<p>
					{key} <br />
					{data[key].years}
				</p>
			</div>
		);
	}
	let institutionList = institutions.map(function (institution) {
		return institution;
	});
	return institutionList;
}

function Experience(data) {
	let jobs = [];
	for (let key in data) {
		jobs.push(
			<div>
				<p id={"bold"}>
					{key} - {data[key].position} <br />
					{data[key].time}
				</p>
				<p>{data[key].description}</p>
			</div>
		);
	}
	let jobList = jobs.map(function (job) {
		return job;
	});
	return jobList;
}

function Rating(value) {
	let rating = [];
	for (let i = 0; i < value; i++) {
		rating.push(<IoEllipse size={15} color="#d1d0c5" />);
	}
	for (let i = 0; i < 5 - value; i++) {
		rating.push(<IoEllipseOutline size={15} color="#d1d0c5" />);
	}
	let ratingList = rating.map(function (circle) {
		return <p className={"language-skill-rating"}>{circle}</p>;
	});

	return <p className={"language-skill-rating"}>{ratingList}</p>;
}

export default About;

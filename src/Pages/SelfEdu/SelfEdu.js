import React from "react";
import jsonSelfEdu from "./SelfEdu.json";

function SelfEdu() {
	return (
		<div className={"content"}>
			<h2>{"> Autodidacticism"}</h2>
			<blockquote>
				"Self-education is, I firmly believe, the only kind of education there
				is." <br />
				<br /> &mdash; Issac Asimov
			</blockquote>
			<p>
				The ability to learn on my own has helped expose me to topics outside of
				my formal education. It has opened my mind to some of the world's
				greatest thinkers, broadened my perspectives, and helped me develop as a
				person. These experiences aid in my continuous pursuit to grow as a
				writer and in my communcation skills.
			</p>
			<p>
				Inspired when reading <i>The Personal MBA</i>, I decided to approach my
				self-studies like a real course. By dedicating time, taking notes, and
				applying what I learn, I can turn my interests into practical skills.
			</p>
			<h3>Leadership</h3>
			{Reading(jsonSelfEdu["Leadership"])}
			<h3>Business</h3>
			{Reading(jsonSelfEdu["Business"])}
			<h3>Self-Improvement</h3>
			{Reading(jsonSelfEdu["Self-Improvement"])}
		</div>
	);
}

function Reading(data) {
	let jobs = [];
	for (let key in data) {
		jobs.push(
			<div>
				<p>
					<i>{key}</i> - {data[key].author} <br />
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

export default SelfEdu;

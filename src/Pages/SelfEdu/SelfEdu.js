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
				My formal education has introduced me to a wide array of topics and
				ideas that I am forever grateful for. It has made me a well-rounded and
				curious individual as these subjects have helped me grow in my
				interpersonal and creative skills. Nonetheless, I have continued to
				learn about new topics and ideas outside of the classroom and lecture
				hall. It has been some of these pursuits that have helped me grow more
				as a student and a member of society.
			</p>
			<p>
				The ability to learn on my own has helped expose me to topics outside of
				my formal education. It has opened my mind to some of the world's
				greatest thinkers, broadened my perspectives, and helped me develop as a
				person. These experiences aid in my continuous pursuit to grow as a
				writer and in my communication skills.
			</p>
			<p>
				Inspired when reading <i>The Personal MBA</i>, I decided to approach my
				self-studies like a real course. By dedicating time, taking notes, and
				applying what I learn, I can turn my interests into practical skills.
			</p>
			<u>
				<h3>Leadership</h3>
			</u>
			{Books(jsonSelfEdu["Leadership"])}
			<u>
				<h3>Business</h3>
			</u>
			{Books(jsonSelfEdu["Business"])}
			<u>
				<h3>Self-Improvement</h3>
			</u>
			{Books(jsonSelfEdu["Self-Improvement"])}
		</div>
	);
}

function Books(data) {
	let jobs = [];
	for (let key in data) {
		jobs.push(
			<div>
				<p>
					<b>
						<i>{key}</i>
					</b>{" "}
					- {data[key].author} <br />
				</p>
				<p>&emsp; {data[key].thoughts}</p>
			</div>
		);
	}
	let jobList = jobs.map(function (job) {
		return job;
	});
	return jobList;
}

export default SelfEdu;

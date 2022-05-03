import React from "react";
import { Nav, Container } from "react-bootstrap";
import "./Footer.css";
import {
	IoReader,
	IoLogoLinkedin,
	IoLogoGithub,
	IoLogoGitlab,
	IoLogoReact,
	IoGitBranch,
} from "react-icons/io5";

const Footer = () => {
	return (
		<Container className={"footer"}>
			<Container>
				<Nav>
					<a href="jordan_janakievski_resume.pdf" download>
						<IoReader size={30} className={"logo"} />
					</a>
					<Nav.Link href="https://www.linkedin.com/in/jordan-janakievski">
						<IoLogoLinkedin size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://github.com/jordanjanakievski">
						<IoLogoGithub size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://gitlab.com/jordanjanakievski">
						<IoLogoGitlab size={30} className={"logo"} />
					</Nav.Link>
				</Nav>
			</Container>
			<p>
				<Nav.Link
					href="https://github.com/jordanjanakievski/jordanjanakievski.github.io"
					className="version"
				>
					<IoGitBranch size={20} />
					v2.1.0
				</Nav.Link>
			</p>
		</Container>
	);
};

export default Footer;

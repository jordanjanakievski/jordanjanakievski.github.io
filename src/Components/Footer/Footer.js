import React from "react";
import { Nav, Container } from "react-bootstrap";
import "./Footer.css";
import {
	IoMail,
	IoReader,
	IoLogoLinkedin,
	IoLogoGithub,
	IoLogoReact,
	IoGitBranch,
} from "react-icons/io5";

const Footer = () => {
	return (
		<Container className={"footer"}>
			<Container>
				<Nav>
					<Nav.Link href="mailto:jordan.a.janakievski@gmail.com">
						<IoMail size={30} className={"logo"} />
					</Nav.Link>
					<a href="jordan_janakievski_resume.pdf" download>
						<IoReader size={30} className={"logo"} />
					</a>
					<Nav.Link href="https://www.linkedin.com/in/jordan-janakievski">
						<IoLogoLinkedin size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://github.com/jordanjanakievski">
						<IoLogoGithub size={30} className={"logo"} />
					</Nav.Link>
				</Nav>
			</Container>
			<p>
				Built with <IoLogoReact size={20} color="#646669" />{" "}
				<Nav.Link
					href="https://github.com/jordanjanakievski/jordanjanakievski.github.io"
					className="version"
				>
					<IoGitBranch size={20} />
					v2.0.0
				</Nav.Link>
			</p>
		</Container>
	);
};

export default Footer;

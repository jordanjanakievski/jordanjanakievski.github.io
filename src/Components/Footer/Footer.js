import React from "react";
import { Nav, Container } from "react-bootstrap";
import "./Footer.css";
import {
	IoLogoGitlab,
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
					<Nav.Link href="https://gitlab.com/jordanjanakievski">
						<IoLogoGitlab size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/in/jordan-janakievski">
						<IoLogoLinkedin size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://github.com/jordanjanakievski">
						<IoLogoGithub size={30} className={"logo"} />
					</Nav.Link>
				</Nav>
			</Container>
		</Container>
	);
};

export default Footer;

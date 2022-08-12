import React from "react";
import { Nav, Container } from "react-bootstrap";
import "./Footer.css";
import { SiGitlab, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
	return (
		<Container className={"footer"}>
			<Container>
				<Nav>
					<Nav.Link href="https://gitlab.com/jordanjanakievski">
						<SiGitlab size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://www.linkedin.com/in/jordan-janakievski">
						<SiLinkedin size={30} className={"logo"} />
					</Nav.Link>
					<Nav.Link href="https://github.com/jordanjanakievski">
						<SiGithub size={30} className={"logo"} />
					</Nav.Link>
				</Nav>
			</Container>
		</Container>
	);
};

export default Footer;

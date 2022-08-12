import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
	return (
		<Navbar>
			<Container id={"desktop"}>
				<Nav>
					<Nav.Link href="/" className={"page-title"}>
						Jordan Janakievski
					</Nav.Link>
					<div className={"right-items"}>
						<Nav.Link href="#about" className={"page-names"}>
							About
						</Nav.Link>
						<Nav.Link href="#projects" className={"page-names"}>
							Projects
						</Nav.Link>
						<Nav.Link href="#contact" className={"page-names"}>
							Contact
						</Nav.Link>
					</div>
				</Nav>
			</Container>
			<Container className={"mobile"} id={"mobile-nav"}>
				<Nav>
					<div>
						<Nav.Link href="/" className={"mobile-title"}>
							Jordan Janakievski
						</Nav.Link>
					</div>
					<div>
						<Nav.Link href="#about" className={"mobile-names"}>
							About
						</Nav.Link>
						<Nav.Link href="#projects" className={"mobile-names"}>
							Projects
						</Nav.Link>
						<Nav.Link href="#contact" className={"mobile-names"}>
							Contact
						</Nav.Link>
					</div>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;

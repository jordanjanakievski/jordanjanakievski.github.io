import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Navbar.css";

const NavBar = () => {
	return (
		<Navbar>
			<Container id={"desktop"}>
				<Navbar.Brand href="/">
					<h1 className={"desktop-header"}>jordan janakievski</h1>
				</Navbar.Brand>
				<Nav>
					<Nav.Link
						href="/experience"
						className={"page-names"}
						id={"experience"}
					>
						experience
					</Nav.Link>
					<Nav.Link href="/projects" className={"page-names"} id={"projects"}>
						projects
					</Nav.Link>
					<Nav.Link
						href="/self-education"
						className={"page-names"}
						id={"self-education"}
					>
						self-education
					</Nav.Link>
				</Nav>
			</Container>
			<Container className={"mobile"} id={"mobile-nav"}>
				<Navbar.Brand href="/">
					<h1 className={"mobile-header"}>jj</h1>
				</Navbar.Brand>
				<Nav>
					<NavDropdown title="☰" id="navbarDropdown">
						<br />
						<br />
						<br />
						<NavDropdown.Item
							href="/experience"
							className={"page-names-mobile"}
							id={"experience"}
						>
							experience
						</NavDropdown.Item>
						<NavDropdown.Item
							href="/projects"
							className={"page-names-mobile"}
							id={"projects"}
						>
							projects
						</NavDropdown.Item>
						<NavDropdown.Item
							href="/self-education"
							className={"page-names-mobile"}
							id={"self-education"}
						>
							self-education
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavBar;

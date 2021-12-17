import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

const NavBar = () => {
	return (
		<Navbar>
			<Container id={"desktop"}>
				<Navbar.Brand href="/">
					<h1 className={"desktop-header"}>jordan janakievski</h1>
				</Navbar.Brand>
				<Nav>
					<Nav.Link href="/" className={"page-names"} id={"about"}>
						about
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
				<Nav.Link href="javascript:void(0);">
					<GiHamburgerMenu size={"40"} className={"menu"} onclick={openTop()} />
				</Nav.Link>
				<Nav>
					<Nav.Link href="/" className={"page-names"} id={"about"}>
						about
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
		</Navbar>
	);
};

function openTop() {
	let x = document.getElementById("mobile-nav");
	if (x.className === "mobile container") {
		x.className += " responsive";
	} else {
		x.className = "mobile container";
	}
}

export default NavBar;

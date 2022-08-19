import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./404.css";

function Page404() {
	return (
		<div className={"content"}>
			<br />
			<h2>Whoops, 404 Error!</h2>
			<h2>It looks like that pages does not exist.</h2>
			<div className={"back-home"}>
				<Nav.Link href="/" id="decorations">
					Back to Home
				</Nav.Link>
			</div>
		</div>
	);
}

export default Page404;

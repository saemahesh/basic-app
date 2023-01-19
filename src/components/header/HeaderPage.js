import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
import Cookies from "js-cookie";

function HeaderPage() {
	const logout = ()=> {
		Cookies.remove('uid');
		window.location.href = '/';
	}
	return (
		<Navbar collapseOnSelect className="bg-color" expand="lg" variant="dark">
			<Container>
				<Navbar.Brand href="\">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				{Cookies.get('uid') &&
					<Nav.Item onClick={logout} eventKey={2} style={{ float: 'right' }} className="btn btn-warning">
						<span className="fas fa-arrow-circle-right" />Logout
					</Nav.Item>
				}
			</Container>
		</Navbar>
	);
}

export default HeaderPage;

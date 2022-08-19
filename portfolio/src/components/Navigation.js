import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const Navigation = (props) => {
 return (
	<Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    	<Navbar.Brand href="#home">My Product Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      	<Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
					<Nav.Link href="/resume">Resume</Nav.Link>
      	</Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
 )
}

export default Navigation

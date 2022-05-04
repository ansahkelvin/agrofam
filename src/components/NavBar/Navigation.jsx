import {
  Navbar,
  Nav,
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";

import "./navbar.css";

const Navigation = () => {
  return (
    <div>
      <Navbar bg={"light"} className="background" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand className="nav-header" href="#">
            AgroFarm
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="link" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="link" href="#researchers">
                Researchers
              </Nav.Link>
              <Nav.Link className="link" href="#proposal">
                Proposal
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="email"
                placeholder="email"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">NewsLetter</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

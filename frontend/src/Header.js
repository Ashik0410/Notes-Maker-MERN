import { Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import clue from './clue.png';
const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark"> 
        <Container>
  <Navbar.Brand href="#">Notes Maker  <img src={clue} alt="logo" style={{
            width: "30px",
            paddingRight: "4px"
        }}/> </Navbar.Brand>
 
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
  <Nav className="m-auto">
    <Form className="m-auto">
    <FormControl
        type="search"
        placeholder="Search"
        className="m-auto"
        aria-label="Search"
        />
    </Form>
  </Nav>
    <Nav
        style={{
            maxHeight: '100px',
        }}
        navbarScroll
        >
      <Nav.Link href="/" style={{
            color: "white"
        }}>My Notes</Nav.Link>
      <NavDropdown title="Ashik" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
      
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
export default Header;
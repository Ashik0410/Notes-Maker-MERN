import { Navbar, Nav, NavDropdown, Form, FormControl, Container } from 'react-bootstrap';
import clue from './clue.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark"> 
        <Container>
  <Navbar.Brand><Link to="/">Notes Maker<img src={clue} alt="logo" style={{
            width: "30px",
            paddingRight: "4px"
        }}/></Link></Navbar.Brand>
 
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
        <Link style={{
            color: "white",
            alignSelf: "center",

        }} to="/mynotes">My Notes</Link>
        <NavDropdown title="Ashik" id="navbarScrollingDropdown">
        <NavDropdown.Item> <Link to="/myprofile"> My Profile </Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item><Link to="/">Logout</Link></NavDropdown.Item>
      </NavDropdown>
      
    </Nav>
      
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
}
export default Header;
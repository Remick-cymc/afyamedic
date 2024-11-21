import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Afyamedic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/addlabtest">Add Labtests</Nav.Link>
            <Nav.Link href="/viewlabtest">View Labtests</Nav.Link>
            <Nav.Link href="/addnurse">Add Nurses</Nav.Link>
            <Nav.Link href="/viewnurse">View Nurses</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;
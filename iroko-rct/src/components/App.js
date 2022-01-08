import React from 'react';
import './styles.css';
import atthepark from '../images/atthepark.jpeg';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from './Modal';



function App() {
    const title = "Welcome to Iroko in React";
    const label = "A picture of Iroko at the Park"

    return (
    <div className="App">
    <div className="content">
        <header>
            
            <Navbar bg="lightsalmon" expand={false}>
  <Container fluid>
        <Row>
    <Col><Navbar.Toggle aria-controls="offcanvasNavbar" /></Col>
  </Row>
    <Navbar.Brand href="#"></Navbar.Brand>
    
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
      </Offcanvas.Header>
      <Offcanvas.Body className="Offcanvasbody">
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action2">Gallery</Nav.Link>
        <Nav.Link href="#action2">Contact</Nav.Link>
        </Nav>

      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
<h1>{title}</h1>
        </header>
        
        <div className="image">
        <img src={atthepark} width="500px" height="auto" alt="Iroko at the park" />
       <br/>
        <h4>{label}</h4>
        </div>
        <div>

        <Modal />
        
    </div>
    </div>
    </div>
    );
}


export default App;
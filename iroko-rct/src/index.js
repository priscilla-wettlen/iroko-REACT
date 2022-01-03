import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

ReactDOM.render(
  <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Container>
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
    </Container>
  </Navbar>
</Container>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

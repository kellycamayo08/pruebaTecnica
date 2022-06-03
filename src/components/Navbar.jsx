import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand> <img width={60} height={70} src='https://images.vexels.com/media/users/3/132588/isolated/preview/b5cea7b13003c65e9b7e7c98c1607ff2-icono-de-bicicleta-bicicleta.png'></img></Navbar.Brand>
        <Nav className="me-auto">
         <Link style={{textDecoration:'none', color:'white', marginLeft:'10px', fontSize:'20px'}} to="/">Registro</Link>
          <Link style={{textDecoration:'none', color:'white', marginLeft:'10px', fontSize:'20px'}} to="/List">Lista</Link>
        </Nav>
        </Container>
      </Navbar>
    );
};

export default Navbar1;
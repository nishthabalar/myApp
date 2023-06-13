import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function MenuReady() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>Home</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={'/Blogs'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>Blogs</Link>
                            </Nav.Link>
                            <Nav.Link >
                                <Link to={'/Contact'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default MenuReady
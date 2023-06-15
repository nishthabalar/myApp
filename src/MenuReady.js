import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// font-family: 'Bagel Fat One', cursive;
// font-family: 'Moirai One', cursive;
function MenuReady() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container style={{ display: 'flex', justifyContent: 'center' }}>
                    <Navbar.Brand href="#home" style={{ fontFamily: 'Bagel Fat One', fontSize: '30px' }}>Pallete</Navbar.Brand>
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
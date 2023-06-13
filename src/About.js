// import Image from 'react-bootstrap/Image'
import { Container, Row, Col, Nav, Navbar, Image, Card, Accordion } from 'react-bootstrap'
import img1 from './images/slide-01.jpeg'
import './Home.css'
import flwr1 from './images/flwr-01.avif'
import flwr2 from './images/flwr-02.avif'
import flwr3 from './images/flwr-03.avif'
import flwr4 from './images/flwr-04.avif'
import flwr5 from './images/flwr-05.avif'
import { Link } from 'react-router-dom'
// import React from 'react';   

function About() {
    return (
        <>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: '55vw' }}>
                            <Nav.Link>
                                <Link to={'/'} className='lnk'>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/About'} className='lnk'>About Us</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={'/Register'} className='lnk'>Registration</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Image src={img1} className='images'></Image>
            <Container>
                <Row>
                    <Col className='text-center text-uppercase' style={{ marginTop: '60px', fontSize: '35px' }}>Our Testimonials</Col>
                </Row>
            </Container>
            <Container className='flx'>
                <Card style={{ width: '18rem', marginTop: '30px' }}>
                    <Card.Body>
                        <Card.Title>John Smith</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Entrepreneur</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '30px' }}>
                    <Card.Body>
                        <Card.Title>John Smith</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Entrepreneur</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginTop: '30px' }}>
                    <Card.Body>
                        <Card.Title>John Smith</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Entrepreneur</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Container className='ques'>
                <Row>
                    <Col style={{ fontSize: '25px', textDecoration: 'underline', marginBottom: '15px' }}>Frequently Asked Questions
                    </Col>
                </Row>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Question 1:</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Question 2:</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Container>
                <Row>
                    <Col className='text-center text-uppercase' style={{ marginTop: '50px', marginBottom: '30px', fontSize: '30px' }}>Our Portfolio</Col>
                </Row>
                <Row className='mrg-2'>
                    <Col>
                        <img src={flwr1} width={'99%'}></img>
                    </Col>
                    <Col><img src={flwr2} width={'99%'}></img></Col>
                </Row>
                <Row className='mrg-2'>
                    <Col><img src={flwr3} width={'99%'} height={'93%'}></img></Col>
                    <Col><img src={flwr4} width={'99%'}></img></Col>
                    <Col><img src={flwr5} width={'99%'}></img></Col>
                </Row>
            </Container>
            <section style={{ backgroundColor: 'white', width: '100vw', marginTop: '90px' }}>
                <Container fluid>
                    <Row>
                        <Col className='text-center mrg' style={{ marginTop: '70px' }}>Let's work together</Col>
                    </Row>
                    <Row>
                        <Col className='text-center mrg-2'>office@template.com</Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default About;
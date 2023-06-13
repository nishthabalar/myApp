import { Container, Row, Col, Nav, Navbar, Carousel, Card } from 'react-bootstrap';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img01 from './images/slide-01.jpeg';
import img02 from './images/slide-02.jpg';
import img03 from './images/slide-03.jpg';
import crd01 from './images/card-01.jpg';
import About from './About';
import Regis from './Regis';
import { Link } from 'react-router-dom';
import { FaCanadianMapleLeaf } from 'react-icons/fa'

const Home = () => {
    return (
        <>
            <Navbar expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home"><FaCanadianMapleLeaf /></Navbar.Brand>
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
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        src={img01}
                        alt="First slide"
                    // style={{ height: '95vh' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        src={img02}
                        alt="Second slide"
                    // style={{ height: '95vh' }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imgs"
                        src={img03}
                        alt="Third slide"
                    // style={{ height: '95vh' }}
                    />

                </Carousel.Item>
            </Carousel>
            <Container>
                <Row>
                    <Col className='text-center text-uppercase' style={{ marginTop: '60px', fontSize: '35px' }}>Our Services</Col>
                </Row>
            </Container>
            <Row xs={2} md={3} className="g-0 m-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card className='m-2 p-2'>
                            <Card.Img variant="top" src={crd01} />
                            <Card.Body>
                                <Card.Title className='text-uppercase'>Title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <section style={{ backgroundColor: 'white', width: '100vw' }}>
                <Container fluid>
                    <Row>
                        <Col className='text-center mrg'>Let's work together</Col>
                    </Row>
                    <Row>
                        <Col className='text-center mrg-2'>office@template.com</Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
export default Home;
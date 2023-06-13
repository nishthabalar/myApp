import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { RiEditLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

// const Categories = [
//     "smartphones",
//     "laptops",
//     "fragrances",
//     "skincare",
//     "groceries",
//     "home-decoration",
//     "furniture",
//     "tops",
//     "womens-dresses",
//     "womens-shoes",
//     "mens-shirts",
//     "mens-shoes",
//     "mens-watches",
//     "womens-watches",
//     "womens-bags",
//     "womens-jewellery",
//     "sunglasses",
//     "automotive",
//     "motorcycle",
//     "lighting"
// ]
function ApiDemo3() {
    const [data2, setData2] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => setData2(json.products))
    }, [])
    const [srch, setSrch] = useState('');
    useEffect(() => {
        dataChange();
    }, [srch])
    const dataChange = () => {
        fetch('https://dummyjson.com/products/search?q=' + srch)
            .then(response => response.json())
            .then(json => setData2(json.products))
    }
    const [catt, setCat] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(setCat);

    }, [])
    const [category, setCategory] = useState('nishtha');
    useEffect(() => {
        myCategory();
    }, [category])
    const myCategory = () => {
        fetch('https://dummyjson.com/products/category/' + category)
            .then(response => response.json())
            .then(json => setData2(json.products))
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [categ, setCateg] = useState('');
    const [price, setPrice] = useState('')
    const [descrip, setdescrip] = useState('')
    const [imgs, setImgs] = useState('');


    const addData = () => {
        // console.log('hello')
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": title,
                "category": categ,
                "description": descrip,
                "price": price,

            })
        })
            .then(res => res.json())
            // .then(setAdd);
            .then(json => setData2([...data2, json]))

        // setData2(...data2, add)
        handleClose();
    }
    // useEffect(() => {
    //     addData();
    // }, [add])
    const [del, setDel] = useState({})
    const deleteBtn = (id) => {
        // console.log(id);
        fetch('https://dummyjson.com/products/' + id, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(setDel)

    }
    useEffect(() => {

        remove();
    }, [del])
    const remove = () => {
        let tempp = data2.filter((item) => {
            return item.id != del.id
        })
        console.log(tempp)
        setData2(tempp)
    }
    const editBtn = () => {
        fetch('https://dummyjson.com/products/1', {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'iPhone Galaxy +1'
            })
        })
            .then(res => res.json())
            .then(console.log);

    }
    return (
        <>
            {/* <Link to={'/ApiDemo2'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo2</Link>
            <Link to={'/ApiDemo3'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo3</Link>
            <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo</Link> */}
            {/* <MenuReady></MenuReady> */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Nyra</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to={'/'} style={{ color: 'black', margin: '20px', marginLeft: '200px', textDecoration: 'none' }}>Home</Link>
                            </Nav.Link>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    style={{ width: '300px', marginLeft: '50px' }}
                                    aria-label="Search"
                                    onKeyUp={(e) => {
                                        setSrch(e.target.value)
                                    }}
                                />

                            </Form>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">

                                {
                                    catt.map((cat) => {
                                        return (
                                            <>
                                                <NavDropdown.Item onClick={(e) => { setCategory(e.target.innerText) }} >{cat}</NavDropdown.Item>
                                            </>
                                        )
                                    })
                                }
                            </NavDropdown>
                            <Button onClick={handleShow}>
                                ADD
                            </Button>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row>

                {
                    data2.map((itm) => {
                        return (
                            <>

                                <Col>
                                    <Card style={{ width: 280 }} className='p-2 m-2'>
                                        <Card.Img variant="top" src={itm.thumbnail} style={{ height: 200, width: '100%' }} />
                                        <Card.Body>
                                            <Card.Title style={{ overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 1, textOverflow: 'ellipsis' }}>{itm.title}</Card.Title>
                                            <Card.Text style={{ overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, textOverflow: 'ellipsis' }}>
                                                {itm.description}
                                            </Card.Text>
                                            Price : {itm.price} $
                                            <br />
                                            Rating : {itm.rating}
                                            <hr />
                                            <Button variant="primary" style={{ height: '50px', marginBottom: '10px' }}>
                                                <Link className='btn' to={`/product/${itm.id}`}>Read More</Link>
                                            </Button>

                                            <RiEditLine onClick={handleShow} style={{ fontSize: '25px', cursor: 'pointer', marginRight: '10px', marginLeft: '10px' }} />
                                            <AiOutlineDelete onClick={() => { deleteBtn(itm.id) }} style={{ fontSize: '25px', cursor: 'pointer' }} />
                                        </Card.Body>
                                    </Card>
                                </Col >
                            </>
                        )
                    })
                }
            </Row >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="iphone"
                                autoFocus
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="smartphones"
                                autoFocus value={categ} onChange={(e) => { setCateg(e.target.value) }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="tel" placeholder="100"
                                autoFocus value={price} onChange={(e) => { setPrice(e.target.value) }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Lorem ipsum..."
                                autoFocus value={descrip} onChange={(e) => { setdescrip(e.target.value) }} />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Img</Form.Label>
                            <Form.Control type="url" placeholder=":https//dummy..."
                                autoFocus value={imgs} onChange={(e) => { setImgs(e.target.value) }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addData}>
                        ADD
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ApiDemo3
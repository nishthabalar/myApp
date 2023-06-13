import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Product() {
    let { id } = useParams();
    const [data3, setData3] = useState(
        {
            "id": '',
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": []
        }
    );
    useEffect(() => {
        fetch('https://dummyjson.com/products/' + id)
            .then(response => response.json())
            .then(json => setData3(json))
    }, [])
    return (
        <>
            <Card>
                <Carousel>
                    {
                        data3.images.map((imgs) => {
                            return (
                                <Carousel.Item style={{ width: '500px', height: '500px', marginLeft: '400px', marginTop: '30px' }}>
                                    <img
                                        className="d-block w-100"
                                        src={imgs}
                                        alt="First slide"
                                        variant="top"
                                    />
                                    {/* <Card.Img src="holder.js/100px180" />    */}
                                </Carousel.Item>
                            )
                        })
                    }

                </Carousel>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <h3>Product Page-{id}</h3>
            <h4>{data3.title}</h4>
            <h4>{data3.price}</h4>

            {/* {
                data3.images.map((imgs) => {
                    return (
                        <img src={imgs}></img>
                    )
                })
            } */}
            {/* // src={data3.images} */}
        </>
    )
}

export default Product
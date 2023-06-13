import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ApiDemo() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    return (
        <>
            <Link to={'/ApiDemo2'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo2</Link>
            <Link to={'/ApiDemo3'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo3</Link>
            <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo</Link>
            {
                data.map((items) => {
                    return (
                        <>
                            <h3 style={{ textTransform: "uppercase" }}>{items.name}</h3>
                            <p>{items.username} = {items.email}</p>
                            {/* <p>{items.email}</p> */}
                            {/* <h2>{items.address.street}</h2> */}
                            <hr />
                        </>
                    )
                })
            }
        </>
    )
}

export default ApiDemo
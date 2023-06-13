import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ApiDemo2() {
    const [data1, setData1] = useState([]);
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/708')
            .then(response => response.json())
            .then(json => setData1(json))
    }, [])
    return (
        <>
            <Link to={'/ApiDemo2'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo2</Link>
            <Link to={'/ApiDemo3'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo3</Link>
            <Link to={'/'} style={{ color: 'black', margin: '20px', textDecoration: 'none' }}>ApiDemo</Link>
            {
                <>
                    <h6>{data1.name}</h6>
                    <h6>{data1.status}</h6>
                    <h6>{data1.species}</h6>
                    <h6>{data1.type}</h6>
                    <h6>{data1.gender}</h6>
                    <img src={data1.image}></img>
                </>
            }
        </>
    )
}

export default ApiDemo2
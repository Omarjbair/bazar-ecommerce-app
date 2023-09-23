import React, { Fragment, useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const [products,setProducts] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        setProducts(data.data);
    },[data]);
    
    return (
    <Fragment>
        <Banner/>
        <Products products={products} />
    </Fragment>
    )
}

export default Home

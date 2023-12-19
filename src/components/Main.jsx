import React from 'react'
import Banner from './Banner';
import ProductCat from './ProductCat';
import Feature from './Feature';
import Client from './Client';
import LatestProduct from './LatestProduct';
import Testimonial from './Testimonial';


const Main = () => {
    return (
        <>
            <Banner />
            <Feature />
            <LatestProduct />
            <ProductCat />
            <Testimonial />
            <Client />
        </>
    )
}

export default Main;

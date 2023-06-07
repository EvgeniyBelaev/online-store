import { useState, useEffect } from 'react';
import { getApiResurse } from '@utils/network';
import ProductsList  from '@components/ProductsList'
import { API_PRODUCTS, API_MENS, API_WOMENS, API_JEWERLY } from '@constants/api'

import PropTypes from 'prop-types';

import style from './Product.module.css';

const Product = ({baseUrl}) => {
    const [product, setProduct] = useState([])


    const getResurse = async(url) => {
        const res = await getApiResurse(url)

        if(res) {
            const productList = res.map(({title, id, image, price, category, description}) => {
                return {
                    title,
                    id,
                    image,
                    price,
                    category,
                    description
                }
 
            })
            setProduct(productList)
            
        }
    }


    useEffect(() => {
        getResurse( baseUrl )
    }, [])


    return (
        <>
            <ProductsList product={product} />
        </>
    );
}

Product.propTypes = {
    baseUrl: PropTypes.string
}


export default Product;
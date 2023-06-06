// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getApiResurse } from '@utils/network';
import { API_PRODUCTS, API_MENS, API_WOMENS, API_JEWERLY } from '@constants/api'
import ProductsList  from '@components/ProductsList'

import style from './AllCatalog.module.css';

const AllCatalog = () => {
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
        getResurse(API_JEWERLY )
    }, [])


    return (
        <>
            <ProductsList product={product} />
        </>
    );
}

// AllCatalog.propTypes = {
//     text: PropTypes.string
// }


export default AllCatalog;
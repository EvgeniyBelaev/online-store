// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useQueryParams } from '@hooks/useQueryParams';
import { getApiResurse } from '@utils/network';
import { API_PRODUCTS } from '@constants/api'

import style from './AllCatalog.module.css';

const AllCatalog = () => {
    const [product, setProduct] = useState(null)

    const query = useQueryParams()
    const queryPage = query.get('1')

    const getResurse = async(url) => {
        const res = await getApiResurse(url)

        if(res) {
            const productList = res.map(({title, id, image}) => {
                return {
                    title,
                    id,
                    image
                }
            })
            setProduct(productList)
        }
    }


    useEffect(() => {
        getResurse(API_PRODUCTS )
    })

    return (
        <>AllCatalog</>
    );
}

// AllCatalog.propTypes = {
//     text: PropTypes.string
// }


export default AllCatalog;
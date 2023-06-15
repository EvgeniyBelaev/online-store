import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getApiResurse } from '@utils/network'
import { API_PRODUCTS } from '@constants/api'
import ProductLinkBack from '@components/ProductLinkBack'
import ProductImage from '@components/ProductImage'
import BinButton from '@components/BinButton'

import PropTypes from 'prop-types';
import style from './ProductPage.module.css';

const ProductPage = () => {
    const [productId, setProductId] = useState(null)
    const [productTitle, setProductTite] = useState(null)
    const [productDescription, setProductDescription] = useState(null)
    const [productImage, setProductImage] = useState(null)
    const [productPrice, setProductPrice] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        (async() => {
            setProductId(id)

            const res = await getApiResurse(`${API_PRODUCTS}/${id}`)


            if(res) {
                setProductTite(res.title)
                setProductDescription(res.description)
                setProductImage(res.image)
                setProductPrice(res.price)
            }

        })()
    },[])

    


    return (
        <>
            <ProductLinkBack />
            <div className={style.wrapper}>
                    <h3 className={style.product__title}>{productTitle}</h3>
                <div className={style.container}>
                    <ProductImage productImage={productImage} />
                    <div className={style.description__container}>
                        <p className={style.product__description}>{productDescription}</p>   
                        <span className={style.product__price}>Price: {productPrice}$</span>
                        <BinButton 
                            productId={productId}
                            productTitle={productTitle}
                            productImage={productImage}
                            productPrice={productPrice}
                        /> 
                    </div>
                
                </div>
                

            </div>
        </>
    );
}

ProductPage.propTypes = {
    text: PropTypes.string
}


export default ProductPage;
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CountButton from '@components/CountButton'
import ModalButton from '@components/ModalButton';

import style from './BinList.module.css';

const BinList = ({product, setProduct}) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [onePrice, setOnePrice] = useState(0)

    const storeData = useSelector(state => state.favoriteReducer)

    const prices = []


    Object.entries(storeData).map((item) => {
        prices.push(item[1].price * item[1].count )
    })


    useEffect(() => {
        const tPrice = prices.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(tPrice.toFixed(2))

    })

    useEffect(() => {
        Object.entries(storeData).map((item) => {
            setOnePrice(item[1].price * item[1].count )
        })
    })

    return (
        <div className={style.list__container}>
            <ul className={style.wrapper}>
                {product.map(({title, id, img, price}) => 
                        <li className={style.container} key={id}>
                            <Link to={`/products/${id}`}><img src={img} alt="img" className={style.product__img} /></Link>
                            <span className={style.tpoduct__title}>{title}</span>
                            <div className={style.line__container}>
                                <CountButton id={id} product={product} setProduct={setProduct}/>
                                <span className={style.product__price}>Price for one: {price}</span> 
                            </div>
               
                        </li>
                    )}
            </ul>
            <div className={style.order}>
                <ModalButton totalPrice={Number(totalPrice)} />
                <p className={style.totalPrice}>Total price: {totalPrice}$ </p>
            </div>

        </div>

    );

}

BinList.propTypes = {
    product: PropTypes.array,
    setProduct: PropTypes.func
}


export default BinList;
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import CountButton from '@components/CountButton'

import style from './BinList.module.css';

const BinList = ({product}) => {
    const [totalPrice, setTotalPrice] = useState(0)

    const prices = []

    product.map(({price}) =>{

        prices.push(price)
        return prices

    })


    useEffect(() => {
        const tPrice = prices.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(tPrice)

    }, [])

    return (
        <div className={style.list__container}>
            <ul className={style.wrapper}>
                {product.map(({title, id, img, price}) => 
                        <li className={style.container} key={id}>
                            <Link to={`/products/${id}`}><img src={img} alt="img" className={style.product__img} /></Link>
                            <span className={style.tpoduct__title}>{title}</span>
                            <div className={style.line__container}>
                                <CountButton id={id} />
                                <span className={style.product__price}>Price: {price}$</span> 
                            </div>
               
                        </li>
                    )}
            </ul>
            <p className={style.totalPrice}>Total price: {totalPrice}$ </p>
        </div>

    );

}

BinList.propTypes = {
    product: PropTypes.array,
    count: PropTypes.number,
    setCount: PropTypes.func
}


export default BinList;
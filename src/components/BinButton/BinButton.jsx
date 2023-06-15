import buy from './img/buy.svg'
import { useDispatch } from 'react-redux';

import { setProductToBin, removeProductToBin } from '@store/actions'

import PropTypes from 'prop-types';
import style from './BinButton.module.css';

const BinButton = ({
    productId,
    productTitle,
    productImage,
    productPrice,
}) => {
    const dispatch = useDispatch()

    const set = () => {
        dispatch(setProductToBin({
            [productId]: {
                title: productTitle,
                img: productImage,
                price: productPrice
            }
        }))
    }

    return (
        <div className={style.button} onClick={set}>
            <img src={buy} alt="img"  className={style.img}/>
            <span className={style.button__text}>Buy now</span>
        </div>
    );
}

BinButton.propTypes = {
    productId: PropTypes.string,
    productTitle: PropTypes.string,
    productImage: PropTypes.string,
    productPrice: PropTypes.number
}


export default BinButton;
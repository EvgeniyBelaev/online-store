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
    productBin,
    setProductBin,
    count
}) => {
    const dispatch = useDispatch()

    const dispatchProductToBin = () => {
        if (productBin) {
            dispatch(removeProductToBin(productId))
            setProductBin(false)
            
        } else {
            dispatch(setProductToBin({
                [productId]: {
                    title: productTitle,
                    img: productImage,
                    price: productPrice,
                    count: count,
                    id: Number(productId)
                }
            }))
            setProductBin(true)
        }
    }

    return (
        <div className={style.button} onClick={dispatchProductToBin}>
            <img src={buy} alt="img"  className={style.img}/>
            {productBin 
                ? <span className={style.button__text}>Remove from bin</span>
                : <span className={style.button__text}>Add to bin</span>}
        </div>
    );
}

BinButton.propTypes = {
    productId: PropTypes.string,
    productTitle: PropTypes.string,
    productImage: PropTypes.string,
    productPrice: PropTypes.number,
    productBin: PropTypes.bool,
    setProductBin: PropTypes.func,
    count: PropTypes.number,
}


export default BinButton;
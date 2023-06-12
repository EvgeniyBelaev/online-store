import buy from './img/buy.svg'

import PropTypes from 'prop-types';
import style from './BinButton.module.css';

const BinButton = () => {
    return (
        <div className={style.button}>
            <img src={buy} alt="img"  className={style.img}/>
            <span className={style.button__text}>Buy now</span>
        </div>
    );
}

// BinButton.propTypes = {
//     text: PropTypes.string
// }


export default BinButton;
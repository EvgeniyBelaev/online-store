import { NavLink } from 'react-router-dom';
import buy from './img/buy.svg'

import PropTypes from 'prop-types';
import style from './Bin.module.css';

const Bin = () => {
    return (
        <div className={style.container}>
            <NavLink to='/bin'>
                <img src={buy} alt="bin" className={style.img} />
            </NavLink>
        </div>
    );
}

// Bin.propTypes = {
//     text: PropTypes.string
// }


export default Bin;
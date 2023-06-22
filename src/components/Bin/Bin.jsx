import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import buy from './img/buy.svg'

import PropTypes from 'prop-types';
import style from './Bin.module.css';

const Bin = () => {
    const [count, setCount] = useState()

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setCount('...') : setCount(length)
    })

    return (
        <div className={style.container}>
            <NavLink to='/bin'>
                <span className={style.counter}>{count}</span>
                <img src={buy} alt="bin" className={style.img} />
            </NavLink>
        </div>
    );
}

// Bin.propTypes = {
//     text: PropTypes.string
// }


export default Bin;
import { NavLink } from 'react-router-dom'


import PropTypes from 'prop-types';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.container}>
            <div className={style.header__nvigation}>
                <p className={style.logo}>Lorem ipsum store</p>
                <ul className={style.list__container}>
                    <li><NavLink to='/'>Главная</NavLink></li>
                    <li><NavLink to='/catalog'>Вся коллекция</NavLink></li>
                    <li><NavLink to='/womancloth'>Женщинам</NavLink></li>
                    <li><NavLink to='/menscloth'>Мужчинам</NavLink></li>
                    <li><NavLink to='/jewerly'>Украшения</NavLink></li>
                </ul>
            </div>
            <div className={style.header__info}>
                <h1 className={style.info__header}>Lorem ipsum store</h1>
                <p className={style.info__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

        </header>
    );
}

// Header.propTypes = {
//     text: PropTypes.string
// }


export default Header;
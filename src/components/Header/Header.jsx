import { NavLink } from 'react-router-dom'
import Logo from './img/logo.png'

import PropTypes from 'prop-types';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.container}>
            <img src={Logo} alt="logo" className={style.header__logo} />
            <ul className={style.list__container}>
                <li><NavLink to='/'>Главная</NavLink></li>
                <li><NavLink to='/catalog'>Весь каталог</NavLink></li>
                <li><NavLink to='/womancloth'>Женская одежда</NavLink></li>
                <li><NavLink to='/menscloth'>Мужская одежда</NavLink></li>
                <li><NavLink to='/jewerly'>Украшения</NavLink></li>
            </ul>
        </header>
    );
}

// Header.propTypes = {
//     text: PropTypes.string
// }


export default Header;
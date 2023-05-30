import style from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <footer className={style.wrapper}>Create by Fake Store API. 2023</footer>
    );
}

Footer.propTypes = {
    text: PropTypes.string
}


export default Footer;
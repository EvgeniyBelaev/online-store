import style from './Footer.module.css';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <footer className={style.wrapper}>2023</footer>
    );
}

Footer.propTypes = {
    text: PropTypes.string
}


export default Footer;
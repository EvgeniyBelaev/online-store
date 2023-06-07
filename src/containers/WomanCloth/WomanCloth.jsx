import Product from '@components/Product/Product';
import { API_WOMENS } from '@constants/api'

import PropTypes from 'prop-types';
import style from './WomanCloth.module.css';

const WomanCloth = () => {
    return (
        <Product baseUrl={API_WOMENS} />
    );
}

// WomanCloth.propTypes = {
//     text: PropTypes.string
// }


export default WomanCloth;
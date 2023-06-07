import Product from '@components/Product/Product';
import { API_MENS } from '@constants/api'

import PropTypes from 'prop-types';
import style from './MensCloth.module.css';

const MensCloth = () => {
    return (
        <Product baseUrl={API_MENS} />
    );
}

// MensCloth.propTypes = {
//     text: PropTypes.string
// }


export default MensCloth;
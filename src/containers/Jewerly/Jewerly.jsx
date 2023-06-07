import Product from '@components/Product/Product';
import { API_JEWERLY } from '@constants/api'

import PropTypes from 'prop-types';
import style from './Jewerly.module.css';

const Jewerly = () => {
    return (
        <>
            <Product baseUrl={API_JEWERLY} />
        </>

    );
}

// Jewerly.propTypes = {
//     text: PropTypes.string
// }


export default Jewerly;
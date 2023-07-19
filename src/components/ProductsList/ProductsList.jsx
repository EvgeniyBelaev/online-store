
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import style from './ProductsList.module.css';

const ProductsList = ({product}) => {


    return (
        <ul className={style.list__container}>
            {product.map(({title, id, image, price}) => 
                <li className={style.list__item} key={id}>
                    <Link to={`/products/${id}`}>
                        <img className={style.product__photo} src={image} alt={title} />
                        <p>{title}</p>
                        <p>Price: {price}$</p>
                    </Link>
                </li>
            )}
        </ul>
    );
}

ProductsList.propTypes = {
    product: PropTypes.array
}


export default ProductsList;
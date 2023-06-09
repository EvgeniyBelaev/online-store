import PropTypes from 'prop-types';
import style from './ProductImage.module.css';

const ProductImage = ({productImage}) => {
    return (
        <div className={style.container}>
            <img src={productImage} alt="img" className={style.img} />
        </div>

    );
}

ProductImage.propTypes = {
    productImage: PropTypes.string
}


export default ProductImage;
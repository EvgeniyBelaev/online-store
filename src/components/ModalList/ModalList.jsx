import { useSelector } from 'react-redux'

import style from './ModalList.module.css';
// import PropTypes from 'prop-types';

const ModalList = () => {
    const storeData = useSelector(state => state.favoriteReducer)
    

    return (
        <div className={style.modal__contetnt}>
            <ul className={style.modal__list}>
                {
                    Object.entries(storeData).map((item) => 
                        <li className={style.modal__item} key={item[1].id}>
                            <img src={item[1].img} alt="img" className={style.item__img} />
                            <span className={style.item__title}>{item[1].title}</span>
                            <div className={style.item__container}>
                                <span className={style.item__count}>{item[1].count} pieces</span>
                                <span className={style.item__price}>price: {item[1].price} $</span>
                            </div>

                        </li>
                    )
                }
            </ul>
        </div>
    );
}

// ModalList.propTypes = {
//     text: PropTypes.string
// }


export default ModalList;
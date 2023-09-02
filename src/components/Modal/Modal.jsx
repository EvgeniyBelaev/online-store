import ModalList from '@components/ModalList'
import ModalOrderButton from '@components/ModalOrderButton'

import close from './img/close.svg'

import style from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({
    setOpenModal,
    totalPrice
}) => {
    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.background} onClick={closeModal} ></div>
            <div className={style.container}>
                <div className={style.modal__header}>
                    <img src={close} alt="close" className={style.img} onClick={closeModal} />
                    <span className={style.modal__text}>your order</span>
                </div>
                <ModalList />
                <div className={style.modal__footer}>
                    <span className={style.modal__text}>totalPrice: {totalPrice} $</span>
                    <ModalOrderButton setOpenModal={setOpenModal} />
                </div>
                
            </div>

        </div>
        
    );
}

Modal.propTypes = {
    setOpenModal: PropTypes.func,
    totalPrice: PropTypes.number
}


export default Modal;
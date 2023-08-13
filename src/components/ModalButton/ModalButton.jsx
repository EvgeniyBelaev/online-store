import style from './ModalButton.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ModalButton = () => {
    const [openModal, setOpenModal] = useState(false)

    open = () => {
        openModal 
            ? setOpenModal(false)
            : setOpenModal(true)
    }

    return (
        <div className={style.modal__button} onClick={open}>place an order</div>
    );
}

ModalButton.propTypes = {
    text: PropTypes.string
}


export default ModalButton;
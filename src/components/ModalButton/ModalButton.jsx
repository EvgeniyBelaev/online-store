import style from './ModalButton.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '@components/Modal';

const ModalButton = ({totalPrice}) => {
    const [openModal, setOpenModal] = useState(false)

    open = () => {
        openModal 
            ? setOpenModal(false)
            : setOpenModal(true)
    }

    return (
        <>
            <div className={style.modal__button} onClick={open}>place an order</div>
            {
                openModal && <Modal 
                    setOpenModal={setOpenModal}
                    totalPrice={totalPrice}
                />
            }
        </>


    );
}

ModalButton.propTypes = {
    totalPrice: PropTypes.number
}


export default ModalButton;
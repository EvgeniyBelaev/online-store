import ModalDone from '@components/ModalDone'

import { useState } from 'react';
import style from './ModalOrderButton.module.css';

import PropTypes from 'prop-types';

const ModalOrderButton = ({setOpenModal}) => {
    const [done, setDone] = useState(false)

    const PlaceAnOrder = () => {
        setDone(true)
        setTimeout(() => {
            setDone(false)
        }, 2000)
        setTimeout(() => {
            setOpenModal(false)
        }, 2500)
    }

    return (
        <>
            <div className={style.button} onClick={PlaceAnOrder}>Place An Order</div>
            {done && <ModalDone />}
        </>
    );
}

ModalOrderButton.propTypes = {
    setOpenModal: PropTypes.func
}



export default ModalOrderButton;
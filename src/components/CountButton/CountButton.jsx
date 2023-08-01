import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { changeCount } from '@store/actions'
import { increment, decrement, removePrioductFromBin } from '@store/reducers/favoriteReducer'


import PropTypes from 'prop-types';
import style from './CountButton.module.css';

const CountButton = ({id, setProduct}) => {
    const [count, setCount] = useState()
    const dispatch = useDispatch()

    const storeData = useSelector(state => state.favoriteReducer)   



    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map(item => {
                if (item[1].id === Number(id)) {
                    setCount(item[1].count)

                }     

            })
        }
    })
  


    const incrementCount = () => {
        dispatch(increment({id: Number(id)}))
    }

    const decrementCount = () => {
        if (count === 1) {
            dispatch(removePrioductFromBin(id))  
            setProduct([])
        }
                  
        dispatch(decrement({id: Number(id)}))
    }

    return (
        <div className={style.container}>
            <div className={style.symbol__container}onClick={decrementCount} >
                <span className={style.symbol}>-</span>
            </div>
            <span className={style.count}>{count}</span>
            <div className={style.symbol__container} onClick={incrementCount}>
                <span className={style.symbol}>+</span>
            </div>
        </div>
    );
}

CountButton.propTypes = {
    id: PropTypes.string,
    setProduct: PropTypes.func
}


export default CountButton;
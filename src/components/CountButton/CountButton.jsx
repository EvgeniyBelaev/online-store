import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { changeCount } from '@store/actions'
import { increment, decrement } from '@store/reducers/favoriteReducer'


import PropTypes from 'prop-types';
import style from './CountButton.module.css';

const CountButton = ({id}) => {
    // const [count, setCount] = useState()
    const dispatch = useDispatch()

    const storeData = useSelector(state => state.favoriteReducer)
    


    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map(item => {
                if (item[1].id === Number(id)) {
                    // setCount(item[1].count)
                    
                }     

            })
        }
    }, [])


    


    const plus = () => {
        dispatch(changeCount({
            id: Number(id),

           
        }))
    }

    return (
        <div className={style.container}>
            <div className={style.symbol__container}>
                <span className={style.symbol}>-</span>
            </div>
            <span className={style.count}>{count}</span>
            <div className={style.symbol__container} onClick={() => dispatch(increment({id: Number(id)}))}>
                <span className={style.symbol}>+</span>
            </div>
        </div>
    );
}

CountButton.propTypes = {
    id: PropTypes.string,
}


export default CountButton;
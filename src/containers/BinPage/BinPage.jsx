import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import BinList from '@components/BinList'

import style from './BinPage.module.css';

const BinPage = () => {
    const [product, setProduct] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)
    

    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    title: item[1].title,
                    img: item[1].img,
                    price: item[1].price,
                    count: item[1].count
                }
            })
            setProduct(res)

        }
    }, [])
    
    return (
        <>
            <h1 className='header__text'>Bin</h1>
            {product.length
                ?<BinList product={product} setProduct={setProduct}/>
                :<h2 className={style.comment}>Your bin is emty</h2>
            }
            
        </>

    );
}


export default BinPage;
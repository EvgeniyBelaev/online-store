import { useSelector } from 'react-redux'

import style from './BinPage.module.css';

const BinPage = () => {
    const storeData = useSelector(state => state.favoriteReducer)
    
    return (
        <>BinPage</>
    );
}


export default BinPage;
import {API_MENS, API_WOMENS, API_JEWERLY } from '@constants/api'

import Product from '@components/Product/Product';
import style from './AllCatalog.module.css';

const AllCatalog = () => {
   return (
    <>
        <Product baseUrl={API_WOMENS} />
        <Product baseUrl={API_MENS} />
        <Product baseUrl={API_JEWERLY} />
    </>

   )
}



export default AllCatalog;
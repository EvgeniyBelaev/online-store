import HomePage from '@containers/HomePage';
import AllCatalog from '@containers/AllCatalog';
import Jewerly from '@containers/Jewerly';
import MensCloth from '@containers/MensCloth';
import WomanCloth from '@containers/WomanCloth';
import ProductPage from '@containers/ProductPage';

const routesConfig =[
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/catalog',
        element: <AllCatalog/>
    },
    {
        path: '/womancloth',
        element: <WomanCloth/>
    },
    {
        path: '/menscloth',
        element: <MensCloth/>
    },
    {
        path: '/jewerly',
        element: <Jewerly/>
    },
    {
        path: `/products/:id`,
        element: <ProductPage/>
    },
]

export default routesConfig
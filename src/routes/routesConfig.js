import HomePage from '@containers/HomePage';
import Jewerly from '@containers/Jewerly';
import MensCloth from '@containers/MensCloth';
import WomanCloth from '@containers/WomanCloth';

const routesConfig =[
    {
        path: '/',
        element: <HomePage/>
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
]

export default routesConfig
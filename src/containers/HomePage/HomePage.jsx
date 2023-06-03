import HomeSectionOne from '@components/HomeSectionOne'
import HomeSectionTwo from '@components/HomeSectionTwo'

import style from './HomePage.module.css';


const HomePage = () => {
    return (
        <>
            <h1 className='header__text'>Only new collection 2023.</h1>
            <HomeSectionOne />
            <HomeSectionTwo />
        </>

    );
}



export default HomePage;
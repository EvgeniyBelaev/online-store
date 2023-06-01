import HomeSectionOne from '@components/HomeSectionOne'

import style from './HomePage.module.css';


const HomePage = () => {
    return (
        <>
            <h1 className='header__text'>Только новейшие коллекции 2023 года</h1>
            <HomeSectionOne />
        </>

    );
}



export default HomePage;
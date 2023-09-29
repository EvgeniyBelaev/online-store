import { NavLink } from 'react-router-dom'

import style from './HomeSectionOne.module.css';
import mansCloth from './img/man_cloth.jpg'
import womansCloth from './img/woman_cloth.jpg'
import jewerly from './img/jewerly.jpg'

const HomeSectionOne = () => {
    return (
        <section className={style.wrapper}>
            <div className={style.wrapper__cloth}>
                <NavLink to='/womancloth'>
                    <div className={style.container}>
                        <span className={style.text}>For Woman</span>
                        <img src={womansCloth} alt="img" className={style.img} />
                        <div className={style.background}></div>
                    </div>
                </NavLink>
                <NavLink to='/menscloth'>
                    <div className={style.container}>
                        <div className={style.background}></div>
                        <img src={mansCloth} alt="img" className={style.img} />
                        <span className={style.text}>For Man</span>
                    </div>
                </NavLink>
            </div>
            <NavLink to='/jewerly'>
                <div className={style.wrapper__jewerly}>
                    <div className={style.square__one}></div>
                    <div className={style.square__two}></div>
                    <img src={jewerly} alt="img" className={style.jewerly__img} />
                    <p className={style.text}>Jewerly</p>
                </div>
            </NavLink>
        </section>

    );
}



export default HomeSectionOne;
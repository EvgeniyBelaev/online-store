import style from './HomeSectionOne.module.css';
import mansCloth from './img/man_cloth.jpg'
import womansCloth from './img/woman_cloth.jpg'
import jewerly from './img/jewerly.jpg'

const HomeSectionOne = () => {
    return (
        <section>
            <div className={style.wrapper__cloth}>
                <div className={style.container}>
                    <span className={style.text}>Женщинам</span>
                    <img src={womansCloth} alt="img" className={style.img} />
                    <div className={style.background}></div>
                </div>
                <div className={style.container}>
                    <div className={style.background}></div>
                    <img src={mansCloth} alt="img" className={style.img} />
                    <span className={style.text}>Мужчинам</span>
                </div>
            </div>
            <div className={style.wrapper__jewerly}>
                <div className={style.square__one}></div>
                <div className={style.square__two}></div>
                <img src={jewerly} alt="img" className={style.jewerly__img} />
                <p className={style.text}>Украшения</p>
            </div>
        </section>

    );
}



export default HomeSectionOne;
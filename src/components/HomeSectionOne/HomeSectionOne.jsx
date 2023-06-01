import style from './HomeSectionOne.module.css';
import mansCloth from './img/man_cloth.jpg'
import womansCloth from './img/woman_cloth.jpg'

const HomeSectionOne = () => {
    return (
        <section className={style.wrapper}>
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
        </section>
    );
}



export default HomeSectionOne;
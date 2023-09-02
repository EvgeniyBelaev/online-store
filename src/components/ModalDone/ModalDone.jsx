import style from './ModalDone.module.css';
import done from './img/done.svg'

const ModalDone = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.background}></div>
            <div className={style.container}>
                <img src={done} alt="img" className={style.img}/>
            </div>
            
        </div>
    );
}


export default ModalDone;
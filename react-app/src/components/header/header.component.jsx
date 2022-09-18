import { Link, Outlet } from "react-router-dom"
import s from './header.module.css';
import style from '../default.module.css';

import getClasses from '../default'

const Header = () => {
    return (
        <>
            {console.log(process.env)}
            <header>
                <img className={s['back-image']} src='https://i2.photo.2gis.com/main/branch/162/70000001046292561/common' />
                <div className={s['back-shadow']} />
                <div className={s['content']}>
                    <hgroup>
                        <h1>LOGO</h1>
                        <i>slogan</i>
                    </hgroup>
                </div>
            </header>
            <div className={s.navbar + ' ' + getClasses(style, ['grid-container', 'grid-4'])}>
                <Link to='/menu/drinks'><div className={s.link}>Напитки</div></Link>
                <Link to='/menu/food'><div className={s.link}>Еда</div></Link>
                <Link to='/'><div className={s.link}>Домой</div></Link>
                <Link to='/profile/account'><div className={s.link}>Аккаунт</div></Link>
            </div>
            <Outlet />
        </>
    )

}

export default Header;
import { Link, Outlet } from "react-router-dom"
import s from './header.module.css';
import style from '../default.module.css';

import getClasses from '../default'

const SmallHeader = () => {
    return (
        <>
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

export default SmallHeader;
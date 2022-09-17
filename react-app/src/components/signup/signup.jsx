import axios from 'axios';
import s from '../signin/signin.module.css';
import { useState } from 'react';

const defaultInputs = {
    username: '',
    email: '',
    password: ''
};

const Signup = () => {
    const [data, setData] = useState(defaultInputs);
    const { username, email, password } = data;

    const onInput = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        axios.post('http://localhost:3001/register', { username, password, email }, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={s.inputContainer}>
                    <label htmlFor="">Логин</label>
                    <div className={s['m-8'] + ' ' + s['w-full']}>
                        <input onChange={onInput} type="text" name='username'/>
                    </div>
                    <label htmlFor="">Почта</label>
                    <div className={s['m-8'] + ' ' + s['w-full']}>
                        <input onChange={onInput} type="email" name='email' />
                    </div>
                    <label htmlFor="">Пароль</label>
                    <div className={s['m-8'] + ' ' + s['w-full']}>
                        <input onChange={onInput}  type="password" name='password' />
                    </div>
                    <button
                        className={s.button + ' ' + s['w-full']}>
                        Регистрация
                    </button>
                </div>
            </form>
        </div >
    )
}

export default Signup;
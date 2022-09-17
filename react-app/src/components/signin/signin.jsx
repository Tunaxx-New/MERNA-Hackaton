import axios from 'axios';
import s from './signin.module.css';
import style from '../default.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultInputs = {
    username: '',
    password: ''
}

const SignIn = () => {
    const [inputData, setInputData] = useState(defaultInputs);

    const { username, password } = inputData;

    const onInput = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
        console.log(inputData);
    }
    let navigate = useNavigate();
    const notAccount = () => {
        navigate('/profile/sign-up')
    }

    const setData = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', { username, password }, { withCredentials: true })
            .then(res => console.log(res.data))
    }

    return (
        <>
            <div className={s.inputContainer}>
                <h2>Добро Пожаловать!</h2>
                <form onSubmit={setData}>
                    <label htmlFor="">Логин</label>
                    <div>
                        <input type="text" onChange={onInput} name='username' />
                    </div>
                    <label htmlFor="">Пароль</label>
                    <div>
                        <input type="password" onChange={onInput} name='password' />
                    </div>
                    <button
                        className={s.button}>
                        Войти
                    </button>
                    <button
                        className={s.button}
                        onClick={notAccount}>
                        Нет аккаунта
                    </button>
                </form>

            </div>
        </>

    )
}

export default SignIn;
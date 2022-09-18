import axios from 'axios';
import { useEffect, useState } from 'react';
import s from './account.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import UserAccount from './UserAccout'
import CashierAccount from './CashierAccount'
import AdminAccount from './AdminAccout'

const Account = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [role, setRole] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:3001/role', {}, {withCredentials: true})
            .then((res) => {
                console.log(res)
                if (res.data === 'notauth') {
                    navigate('/profile/sign-in');
                }
                else {
                    setRole(res.data);
                }
            })
            .catch((err) => {navigate('/profile/sign-in');});
    }, []);

    return (
        <div>
            {((role === 'user') ? true : null) && <UserAccount /> }
            {((role === 'cashier') ? true : null) && <CashierAccount /> }
            {((role === 'admin') ? true : null) && <AdminAccount /> }
        </div>
    );
};

export default Account;

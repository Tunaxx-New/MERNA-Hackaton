import axios from 'axios';
import { useEffect, useState } from 'react';
import s from './account.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    return (
        <div>User</div>
    );
};

export default UserAccount;

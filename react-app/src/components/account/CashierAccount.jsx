import axios from 'axios';
import { useEffect, useState } from 'react';
import s from './account.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const CashierAccount = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    return (
        <div>Cashier</div>
    );
};

export default CashierAccount;

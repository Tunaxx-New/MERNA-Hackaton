import axios from 'axios';
import { useEffect, useState } from 'react';
import s from '../Menu/style.module.css';
import style from '../default.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const AdminAccount = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:3001/getProducts', {}, {withCredentials: true})
            .then((res) => {
                setProducts(res.data);
            })
        axios.post('http://localhost:3001/getUsers', {}, {withCredentials: true})
            .then((res) => {
                setUsers(res.data);
            })
    }, []);

    return (
        <div>
        <td>
            <div className={s.itemContainer}>
                {products.map((d) => (
                    <Link key={d._id} to={d._id}>
                        <div className={s.item}>
							<span>
								<img src={d.imageUrl} alt={d.name} />
							</span>
                            <span className={s.name}>{d.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </td>
        <td>
            <div className={s.itemContainer}>
                {users.map((d) => (
                    <Link key={d._id} to={d._id}>
                        <div className={s.item}>
                            <span className={style['p-32']}>
                                <h3>{d.username}</h3>
                                <h3>{d.email}</h3>
                                <h3>{d._id}</h3>
                                <h3>{d.phone}</h3>
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </td>
        </div>
    );
};

export default AdminAccount;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import s from '../Menu/style.module.css';

const Category = () => {
    let { category } = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/menu')
            .then(res => setData(res.data))
            .then(res => console.log(data))
    }, [])

    return (
        <div className={s.menu}>
            <div className={s.itemContainer}>
                {
                    data.filter(d => d.category === category).map(dd => (
                        <Link to={`${dd._id}`} key={dd._id}>
                            <div className={s.item}>
                                <td><img src={dd.imageUrl} alt={dd.name} /></td>
                                <td className={s.name}>{dd.name}</td>
                                <td className={s.price}>{dd.price} тг</td>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Category;
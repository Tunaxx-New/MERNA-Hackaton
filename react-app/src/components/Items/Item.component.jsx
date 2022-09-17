import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import s from './style.module.css';

const Items = () => {

    let { id } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/${id}`)
            .then(res => setData(res.data))
    }, [])

    return (
        <div className={s.container}>
            <td>
                <img src={data.imageUrl} alt={data.name} />
                <h1 className={s.price}>{data.price} тг.</h1>
            </td>
            <td className={s.name}>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </td>
        </div>
    )
}

export default Items;
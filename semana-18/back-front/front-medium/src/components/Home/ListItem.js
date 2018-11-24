import React from 'react';
import {Link} from "react-router-dom";

const ListItem = ({_id, title, deleteItem}) => (
    <li>
        <Link to={`/detail/${_id}`}>{title}</Link>
        <Link to={`/${_id}/edit`}><button>Editar</button></Link>
        <button onClick={() => deleteItem(_id)} >Eliminar</button>
    </li>
);

export default ListItem;
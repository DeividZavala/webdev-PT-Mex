import React from 'react';
import {Link} from "react-router-dom";

const ListItem = ({_id, title}) => (
    <li>
        <Link to={`/detail/${_id}`}>{title}</Link>
    </li>
);

export default ListItem;
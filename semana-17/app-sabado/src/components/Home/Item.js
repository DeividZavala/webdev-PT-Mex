import React from 'react';

const Item = ({item}) => (
    <li>
        <p>{item.name} tiene {item.age}</p>
    </li>
);

export default Item;
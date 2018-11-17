import React from 'react';

const Item = ({item, handleClick}) => (
    <li onClick={ () => handleClick(item) }>
        <p>{item.name} tiene {item.age}</p>
    </li>
);

export default Item;
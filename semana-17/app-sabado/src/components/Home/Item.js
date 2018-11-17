import React from 'react';

const Item = ({item, handleClick, deleteItem}) => (
    <li onClick={ () => handleClick(item) }>
        <p>{item.name} tiene {item.age}</p>
        <button onClick={() => deleteItem()}>Borrame esta</button>
    </li>
);

export default Item;
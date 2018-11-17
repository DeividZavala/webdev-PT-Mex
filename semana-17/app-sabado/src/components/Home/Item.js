import React from 'react';

const Item = ({item, handleClick, deleteItem, index}) => (
    <li onClick={ () => handleClick(item) }>
        <p>{item.name} tiene {item.age}</p>
        <button onClick={() => deleteItem(index)}>Borrame esta</button>
    </li>
);

export default Item;
import React from 'react';
import cssList from './List.scss';

function List({items}) {
  
  return (
    <ul className="list">
      {items.map(item => {
        return (
          <li className={item.active ? 'active' : ''}>
            <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
            <span>{item.name}</span>
          </li>
        )
      })}
     
    </ul>
  )
}

export default List;
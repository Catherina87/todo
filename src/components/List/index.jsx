import React from 'react';
import classNames from 'classnames';
import Badge from '../Badge';


import './List.scss';

function List({ items, isRemovable, onClick }) {
  
  return (
    <ul onClick={onClick} className="list">
      {items.map((item, i) => {
        return (
          <li key={i} className={classNames(item.className, { active: item.active })}>
            <i>{item.icon ? item.icon : <Badge color={item.color}/>}</i>
            <span>{item.name}</span>
          </li>
        )
      })}
     
    </ul>
  )
}

export default List;
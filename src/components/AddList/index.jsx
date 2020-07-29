import React, { useState } from 'react';
import List from '../List';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg';

import './AddListButton.scss';

function AddList({ colors, onAdd }) {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);
  const [inputValue, setInputValue] = useState('');

  const items3 = [
    {
      className: "list__add-button",
      icon: (
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: "Add List"
    }
  ]

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setSelectedColor(colors[0].id);
  }

  const addList = () => {
    if (!inputValue) {
      alert('Enter the name of the list');
      return;
    }

    const color = colors.filter(color => selectedColor === color.id)[0].name;
    onAdd({ 
      id: Math.random(),
      name: inputValue,
      color: color
    });

    setVisiblePopup(false);
    setInputValue('');
    setSelectedColor(colors[0].id);
  }

  return (
    <div className="add-list">
      <List items={items3} onClick={() => setVisiblePopup(true)}/>

      {visiblePopup && <div className="add-list__popup">

        <img 
          onClick={onClose} 
          src={closeSvg} 
          alt="close button" 
          className="add-list__popup-close-btn" 
        />

        <input 
          value={inputValue} 
          onChange={event => setInputValue(event.target.value)}
          className="field" type="text" 
          placeholder="List name"
        />

        <div className="add-list__popup-colors"> 
          {colors.map(color => {
              return <Badge 
                onClick={() => setSelectedColor(color.id)} 
                key={color.id} 
                color={color.name}
                className={selectedColor === color.id && 'active'}
              />
          })}
        </div>

        <button onClick={addList} className="button">Add</button>
      </div>}

    </div>
  )
}

export default AddList;
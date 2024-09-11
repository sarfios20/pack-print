import React from 'react';
import './ItemSelector.css';
import itemOptions from '../../itemOptions.json';
import { ReactComponent as TrashIcon } from '../../assets/trash-icon.svg';

const ItemSelector = ({ index, itemCode, itemQuantity, serialNumbers, onItemChange, onDelete }) => {
  const handleSelection = (event) => {
    const { name, value } = event.target;
    const newValue = name === 'itemQuantity' ? parseInt(value, 10) : value;
    onItemChange(index, { [name]: newValue });
  };

  const handleSerialNumberChange = (event) => {
    onItemChange(index, { serialNumbers: event.target.value });
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="item-selector-row">
      <div className="item-selector-top-row">
        <select
          name="itemCode"
          className="item-selector-dropdown"
          value={itemCode}
          onChange={handleSelection}
        >
          {itemOptions.map((option, idx) => (
            <option key={idx} value={option.code}>
              {option.display}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="itemQuantity"
          className="item-quantity-input"
          value={itemQuantity}
          min={1}
          onChange={handleSelection}
        />
        <button onClick={handleDelete} className="delete-button">
          <TrashIcon />
        </button>
      </div>
      <div className="item-selector-bottom-row">
        <textarea
          name="serialNumbers"
          className="item-notes-textarea"
          value={serialNumbers}
          placeholder="Enter serial numbers, separated by commas..."
          onChange={handleSerialNumberChange}
        />
      </div>
    </div>
  );
};

export default ItemSelector;

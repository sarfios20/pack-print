import React from 'react';
import './InputSidebar.css';
import ItemSelector from '../ItemSelector/ItemSelector';
import { ReactComponent as PrintIcon  } from '../../assets/print-icon.svg';

const InputSidebar = ({ items, onItemChange, addItem, deleteItem, documentReference, setDocumentReference, deliveryDate, setDeliveryDate, clientReference, setClientReference }) => {

  const handleDateChange = (e) => {
    const dateValue = e.target.value; // yyyy-mm-dd
    const [year, month, day] = dateValue.split('-');
    const formattedDate = `${day}.${month}.${year}`;
    setDeliveryDate(formattedDate);
  };

  const handlePrint = () => {
    window.print(); 
  }

  return (
    <div className="input-sidebar">
      <h3>User Inputs</h3>
      <div className="input-field">
        <label htmlFor="documentReference">Document Reference:</label>
        <input
          type="text"
          id="documentReference"
          value={documentReference}
          onChange={(e) => setDocumentReference(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="clientReference">Client's Reference:</label>
        <input
          type="text"
          id="clientReference"
          value={clientReference}
          onChange={(e) => setClientReference(e.target.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="deliveryDate">Date of Delivery:</label>
        <input
          type="date"
          id="deliveryDate"
          onChange={handleDateChange}
        />
      </div>
      <div className="input-table">
        <div className="input-table-header">
          <div className="header-item">Select Item</div>
          <div className="header-quantity">Quantity</div>
          <div className="header-delete"></div>
        </div>
        {items.map((item, index) => (
          <ItemSelector
            key={index}
            index={index}
            itemCode={item.itemCode}
            itemQuantity={item.itemQuantity}
            serialNumbers={item.serialNumbers}
            onItemChange={onItemChange}
            onDelete={deleteItem}
          />
        ))}
      </div>
      <button onClick={addItem} className="add-item-button">Add Item</button>
      <button onClick={handlePrint} className="print-button" aria-label="Print Packing List">
        <PrintIcon />
      </button>
    </div>
  );
};

export default InputSidebar;

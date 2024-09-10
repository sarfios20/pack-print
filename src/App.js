import React, { useState, useMemo } from 'react';
import './App.css';
import './Print.css';
import PackingList from './components/PackingList/PackingList';
import InputSidebar from './components/InputSideBar/InputSidebar';
import Label from './components/Label/Label';
import itemOptions from './itemOptions.json';

const defaultSerialNumbers = "1241903930, 1241903931, 1241904092, 1241904093";

function App() {
  const [items, setItems] = useState([{ itemCode: '1401184', itemQuantity: 4, serialNumbers: defaultSerialNumbers }]);
  const [documentReference, setDocumentReference] = useState('A24020-10');
  const [deliveryDate, setDeliveryDate] = useState('10.09.2024');
  const [clientReference, setClientReference] = useState('32150450');

  const handleItemChange = (index, newItem) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], ...newItem };
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, { itemCode: '1401184', itemQuantity: 1, serialNumbers: defaultSerialNumbers }]);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const getItemLot = (itemCode) => {
    const itemOption = itemOptions.find(option => option.code === itemCode);
    return itemOption ? itemOption.lote : 'N/A';
  };

  const expandedItems = useMemo(() => {
    return items.flatMap(item =>
      Array.from({ length: item.itemQuantity }, () => ({
        ...item,
        itemLot: getItemLot(item.itemCode),
      }))
    );
  }, [items]);

  return (
    <div className="app-container">
      <InputSidebar
        items={items}
        onItemChange={handleItemChange}
        addItem={addItem}
        deleteItem={deleteItem}
        documentReference={documentReference}
        setDocumentReference={setDocumentReference}
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
        clientReference={clientReference}
        setClientReference={setClientReference}
      />
      <div className="packing-label-container">
        <PackingList
          items={items}
          documentReference={documentReference}
          deliveryDate={deliveryDate}
          clientReference={clientReference}
        />
        {expandedItems.map((item, index) => (
          <Label 
            key={index}
            item={item}
            documentReference={documentReference}
            clientReference={clientReference}
            itemIndex={index + 1}
            totalItems={expandedItems.length}
          />
        ))}
      </div>
    </div>
  );

}

export default App;

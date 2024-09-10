import React from 'react';
import penflexLogo from '../../assets/penflex-logo.png';
import './Label.css';

const Label = ({ item, documentReference, clientReference, itemIndex, totalItems }) => {
  return (
    <div className="Label">
      <div className="Label-inner">
        <div className="Header">
          <img className="label-logo" src={penflexLogo} alt="PENTEX S.L. logo" />
          <div className='label-header-right'>
            <p>Ref:</p>
            <h1>{documentReference}</h1>
          </div>
        </div>
        <div className="Company-info">
        <p>Polígono Sur · Calle Árbol, Nº 50 · 28770 Colmenar Viejo (Madrid) · Tel: 91 000 00 00 · contacto@penflex.es</p>
        </div>
        <p className="Label-aux">Destinatario:</p>

        <div className="Label-address">
          <p>RED ELECTRICA DE ESPAÑA, S.A.U.</p>
          <p>Centro Logístico Valladolid (CLV) - TRANS RASER, S.L.</p>
          <p>C/ Quejigo, s/n Polígono Industrial El Brizo</p>
          <p>Ctra. CL-601, km 13</p>
          <p><strong>47162 - ALDEAMAYOR DE SAN MARTIN (Valladolid)</strong></p>
          <div className="Label-atn-info">
            <p><strong>Atn:</strong></p>
            <div className="Label-atn-details">
            <p>Baldomero Zamora, 513 352 441</p>
            <p>Rafaela Candela, 539 801 203</p>
            </div>
          </div>
        </div>

        <p className="Label-aux">Referencia:</p>

        <div className="Label-reference">
          <p>Pedido nº: {clientReference}</p>
          <p>Código: {item.itemCode}</p>
          <p>Lote: {item.itemLot}</p>
        </div>

        <div className="Label-footer">
          <p>Bulto nº: <span style={{ fontSize: '2em' }}>{itemIndex}</span></p>
          <p>Total nº bultos: <span style={{ fontSize: '2em' }}>{totalItems}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Label;

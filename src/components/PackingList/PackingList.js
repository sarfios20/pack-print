import React from 'react';
import penflexLogo from '../../assets/penflex-logo.png';
import './PackingList.css';
import itemOptions from '../../itemOptions.json';

const PackingList = ({ items, documentReference, deliveryDate, clientReference }) => {
  let currentBultoStart = 1;

  return (
    <div className="packing-list">
      <img src={penflexLogo} alt="PENTEX S.L. logo" id="pentex-logo" />
      <div className="container">
        <div className="content">
          <div className="left-column">
            <div className="header">
              <div className="header-left">
                <h1>ALBARAN:</h1>
                <p>Portes:</p>
                <p>Incluidos</p>
              </div>
              <div className="header-right">
                <h1>{documentReference}</h1>
                <p>Fecha de Entrega:</p>
                <p>{deliveryDate}</p>
              </div>
            </div>
            <div className="info">
              <p>Referencia del Cliente: </p>
              <h1>Pedido nº: {clientReference}</h1>
            </div>
          </div>
          <div className="right-column">
            <div className="address">
              <p style={{ fontSize: '1em', marginBottom: '10px' }}>Dirección de entrega:</p>
              <p style={{ fontSize: '1.33em' }}><strong>RED ELECTRICA DE ESPAÑA, S.A.U.</strong></p>
              <p>Centro Logístico Valladolid (CLV)</p>
              <p>TRANS RASER, S.L.</p>
              <p>Polígono Industrial El Brizo - C/ Quejigo, s/n</p>
              <p>Ctra. CL-601, km 13</p>
              <p><strong>47162 - ALDEAMAYOR DE SAN MARTIN</strong></p>
              <p>(Valladolid)</p>
              <br/>
              <div className="atn-info">
                <p><strong>Atn:</strong></p>
                <div className="atn-details">
                  <p>Baldomero Zamora, 513 352 441</p>
                  <p>Rafaela Candela, 539 801 203</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <table>
          <thead>
            <tr>
              <th>Pos.</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Bulto nº</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              const itemDetails = itemOptions.find(option => option.code === item.itemCode);
              const bultoEnd = currentBultoStart + item.itemQuantity - 1;
              const bultoNumber = currentBultoStart === bultoEnd ? `${currentBultoStart}` : `${currentBultoStart}-${bultoEnd}`;
              currentBultoStart = bultoEnd + 1;

              return (
                <tr key={index}>
                  <td>{(index + 1) * 10}</td>
                  <td>
                    {itemDetails.text}<br />
                    Código de Suministro: {itemDetails.code}<br />
                    Lote: {itemDetails.lote}<br />
                    nº serie:<br /> {item.serialNumbers}
                  </td>
                  <td>{item.itemQuantity}</td>
                  <td>{bultoNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="footer">
      <p style={{ fontSize: '1.24em' }}>PENFLEX, S.L. · Polígono Sur · Calle Árbol, Nº 50 · 28770 Colmenar Viejo (Madrid)</p>
      <p>Inscrita en el Registro Mercantil de Madrid, Tomo 1418, Folio 12, Hoja m-2155 · C.I.F: B87654321</p>
      </div>

    </div>
  );
}

export default PackingList;

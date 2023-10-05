import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "./Cid.css";

function Cid({ Cid }) {

  const [cid, setCid] = useState(
    [
      {
        "cid_id": 1,
        "cid_cid": "A01",
        "cid_descri": "Febre tifoide"
      },
      {
        "cid_id": 2,
        "cid_cid": "B20",
        "cid_descri": "Infecção pelo HIV"
      },
      {
        "cid_id": 3,
        "cid_cid": "C50",
        "cid_descri": "Tumor maligno da mama"
      },
      {
        "cid_id": 4,
        "cid_cid": "D64",
        "cid_descri": "Anemia por def. de ferro"
      },
      {
        "cid_id": 5,
        "cid_cid": "E11",
        "cid_descri": "Diabetes mellitus tipo 2"
      },
      {
        "cid_id": 6,
        "cid_cid": "F41",
        "cid_descri": "Transtornos de ansiedade"
      },
      {
        "cid_id": 7,
        "cid_cid": "G20",
        "cid_descri": "Doença de Parkinson"
      },
      {
        "cid_id": 8,
        "cid_cid": "I10",
        "cid_descri": "Hipertensão essencial"
      },
      {
        "cid_id": 9,
        "cid_cid": "J44",
        "cid_descri": "Doença pulmonar obst crônica"
      },
      {
        "cid_id": 10,
        "cid_cid": "K21",
        "cid_descri": "Doença do refluxo gastro"
      }
    ]
  );

  return (
    <div >
      <Header pag={'Cid'} />
      <h1 className='tituloCid'>
        Lista de CID
      </h1>
      <div className='cidContainer'>
        {cid.map(item => (
          <div className='cid' key={item.cid_id}>
            <span className='id'>ID: {item.cid_id}</span>
            <span className='cod'>CID: {item.cid_cid}</span>
            <span className='descri'>Descrição: {item.cid_descri}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cid;

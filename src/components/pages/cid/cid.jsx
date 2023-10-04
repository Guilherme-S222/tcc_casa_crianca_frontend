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
    ]
  );

  return (
    <div >
      <Header pag={'Cid'} />
      <h1 className='tituloCid'>
        Lista de CID
      </h1>


      <div className='cidContainer'>
        <div className='cid'>
          <span className='id'>{cid.cid_id}</span>
          <span className='cod'>{cid.cid_cid}</span>
          <span className='descri'>{cid.cid_descri}</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 2</span>
          <span className='descri'>Descrição:</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 3</span>
          <span className='descri'>Descrição:</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 4</span>
          <span className='descri'>Descrição:</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 5</span>
          <span className='descri'>Descrição:</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 6</span>
          <span className='descri'>Descrição:</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 7</span>
          <span className='descri'>Descrição:</span>
        </div>
        <div className='cid'>
          <span className='id'>ID:</span>
          <span className='cod'>CID 8</span>
          <span className='descri'>Descrição:</span>
        </div>
      </div>


      <Footer />
    </div>
  );
}

export default Cid;

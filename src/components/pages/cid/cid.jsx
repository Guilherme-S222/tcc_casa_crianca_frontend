import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Cid({ Cid }) {

  const [cid, setCid] = useState (
    [
      {
        "cid_id": 1,
        "cid_cid": "A01",
        "cid_descri": "Febre tifoide"
      }
    ]
  );

  return (
    <div >
      <Header pag={'Cid'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de CID
        </p>

        <div key={cid.cid_id}>
          <span>{cid.cid_cid}</span>
          <span>{cid.cid_descri}</span>
        </div>

      <Footer/>
    </div>
  );
}

export default Cid;

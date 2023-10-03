import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Cid({ Cid }) {

  const [cid, setCid] = useState (
    [
      {
        "cid_id": 1,
        "cid_cid": "A01",
        "cid_descri": "Febre tifoide"
      },
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
        {/* PAREI AQUI */}
        {/* <div className='cid'>
          {
            cid.map(
              cid => {

              },
            )
          };
        </div> */}
      <Footer/>
    </div>
  );
}

export default Cid;

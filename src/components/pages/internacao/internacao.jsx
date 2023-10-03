import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Internação() {

  const [internacao, setInternacao] = useState (
    [
      {
        "intern_id": 1,
        "intern_data": "2023-08-01T11:00:00.000Z",
        "intern_dtsaida": null,
        "intern_tpsaida": null,
        "medic_crm_intern": "12345",
        "user_id_intern": 1,
        "pct_pront_intern": 1
      },
    ]
  );

  return (
    <div >
      <Header pag={'Internacao'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Internação
        </p>
      <Footer/>
    </div>
  );
}

export default Internação;

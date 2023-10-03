import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Transferencia() {

  const [transferencia, setTransferencia] = useState (
    [
      {
        "medic_crm_transf" : "",
        "intern_id_transf" : "",
        "user_id_transf" : "",
        "transf_data" : ""
      },
    ]
  );

  return (
    <div >
      <Header pag={'Transferencia'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Transferência
        </p>
      <Footer/>
    </div>
  );
}

export default Transferencia;

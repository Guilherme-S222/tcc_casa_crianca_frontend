import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

import construcao from '../../../images/construcao.png';

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
      <div>
        <img
          className='construcao'
          src={construcao}
          alt="pagina em construção"
          style={{
            display: 'flex',
            margin: '5rem auto',
            width: '15rem',
          }}
        />
      </div>
      <Footer/>
    </div>
  );
}

export default Transferencia;

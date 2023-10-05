import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";


function Prorrogacao() {

  const [prorrogacao, setProrrogacao] = useState (
    [
      {
        "prorrog_id" : "",
	      "prorrog_data" : "",
	      "intern_id_prorrog" : "",
	      "user_id_prorrog" : "",
	      "medic_crm_prorrog" : ""
      },
    ]
  );

  return (
    <div >
      <Header pag={'Prorrogacao'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Prorrogação
        </p>
      <Footer/>
    </div>
  );
}

export default Prorrogacao;

import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

import construcao from '../../../images/construcao.png';



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

export default Prorrogacao;

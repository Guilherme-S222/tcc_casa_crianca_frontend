import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import './Pacientes.css';

function Pacientes() {

  const [pacientes, setPacientes] = useState (
    [
      {
        "pct_pront": 1,
        "pct_cpf": "12345678901",
        "pct_nome": "João da Silva",
        "pct_sexo": "Masculino",
        "pct_sus": "123456789012345",
        "pct_cns": "123456789012345",
        "pct_dtnasc": "1990-05-15T03:00:00.000Z",
        "pct_aih": "1234567890123",
        "pct_bpc": "Não",
        "pct_aposent": "Não",
        "pct_filiacao": "Maria da Silva",
        "pct_natural": "São Paulo",
        "pct_cor": "Branco",
        "pct_rg": "12345678",
        "pct_dataexp": "2010-02-28T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-08-08T11:00:00.000Z"
      },
    ]
  );

  return (
    <div >
      <Header pag={'Pacientes'}/>
        <div className='pacientesList'>
          <span className='pacientesInfo'>
            Paciente 1
          </span>
        </div>
      <Footer/>
    </div>
  );
}

export default Pacientes;

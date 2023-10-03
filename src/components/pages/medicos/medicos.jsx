import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Medicos() {

  const [medicos, setMedicos] = useState (
    [
      {
        "medic_crm": "12345",
        "medic_nome": "Dr. João Silva",
        "medic_cpf": "12345678901",
        "medic_tel": "Cardiologia"
      },
    ]
  );

  return (
    <div >
      <Header pag={'Medicos'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Médicos
        </p>
      <Footer/>
    </div>
  );
}

export default Medicos;

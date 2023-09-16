import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadPacientes() {
  return (
    <div >
      <Header pag={'CadPacientes'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Pacientes
        </p>
      <Footer/>
    </div>
  );
}

export default CadPacientes;

import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadMedicos() {
  return (
    <div >
      <Header pag={'CadMedicos'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Médicos
        </p>
      <Footer/>
    </div>
  );
}

export default CadMedicos;

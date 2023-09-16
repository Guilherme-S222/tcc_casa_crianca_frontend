import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadInternacao() {
  return (
    <div >
      <Header pag={'CadIntercacao'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Internação
        </p>
      <Footer/>
    </div>
  );
}

export default CadInternacao;

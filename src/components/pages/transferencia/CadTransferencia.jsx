import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadTransferencia() {
  return (
    <div >
      <Header pag={'CadTransferencia'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Transferência
        </p>
      <Footer/>
    </div>
  );
}

export default CadTransferencia;

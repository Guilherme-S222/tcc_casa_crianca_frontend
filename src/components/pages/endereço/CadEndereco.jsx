import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadEndereco() {
  return (
    <div >
      <Header pag={'CadEndereco'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Endereço
        </p>
      <Footer/>
    </div>
  );
}

export default CadEndereco;

import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Endereco() {
  return (
    <div >
      <Header pag={'Endereco'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Endereço
        </p>
      <Footer/>
    </div>
  );
}

export default Endereco;

import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadUsuarios() {
  return (
    <div >
      <Header pag={'CadUsuarios'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de Usuários
        </p>
      <Footer/>
    </div>
  );
}

export default CadUsuarios;

import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Usuarios() {
  return (
    <div >
      <Header pag={'Usuarios'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Usuários
        </p>
      <Footer/>
    </div>
  );
}

export default Usuarios;

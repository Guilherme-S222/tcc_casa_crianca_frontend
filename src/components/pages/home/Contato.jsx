import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';


function Contato() {
  return (
    <div >
      <Header pag={'Contato'}/>
        <p
          style={{
            margin: '10rem',
            textAlign: 'center',
            fontSize: '3rem'
          }}
        >
        Contato
        </p>
      <Footer/>
    </div>
  );
}

export default Contato;

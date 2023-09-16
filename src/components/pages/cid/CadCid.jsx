import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadCid() {
  return (
    <div >
      <Header pag={'CadCid'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Cadastro de CID
        </p>
      <Footer/>
    </div>
  );
}

export default CadCid;

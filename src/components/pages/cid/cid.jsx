import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Cid() {
  return (
    <div >
      <Header pag={'Cid'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de CID
        </p>
      <Footer/>
    </div>
  );
}

export default Cid;

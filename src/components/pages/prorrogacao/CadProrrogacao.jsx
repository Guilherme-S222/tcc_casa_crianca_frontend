import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import construcao from '../../../images/construcao.png';

function CadProrrogacao() {
  return (
    <div >
      <Header pag={'CadProrrogacao'}/>
        <div>
          <img 
          className='construcao' 
          src={construcao} 
          alt="pagina em construção"
          style={{
            display: 'flex',
            margin: '5rem auto',
            width: '15rem',
          }}
          />
        </div>
      <Footer/>
    </div>
  );
}

export default CadProrrogacao;

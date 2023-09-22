import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import './Contato.css';


function Contato() {
  return (
    <div >
      <Header pag={'Contato'}/>

        <div className='contatos'>
          <h1 className='contatoH1'>Contatos</h1>
          <p className='contatoP'>
            Use nosso formulário de contato para todas as solicitações de informações ou entre em contato conosco diretamente usando as informações de contato abaixo. Sinta-se à vontade para entrar em contato conosco via e-mail ou telefone
          </p>
          <div className='contatoBox'>
            <div className='contatoIcons'>
              <div className='contatoLocal'>
                <span></span>
                <h3></h3>
                <p></p>
              </div>
              <div className='contatoTel'>
                <span></span>
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>

      <Footer/>
    </div>
  );
}

export default Contato;

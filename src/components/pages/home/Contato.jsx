import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import { FaPhoneAlt, FaSearchLocation } from "react-icons/fa";

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
        </div>

        <div className='contatoBox'>
            <div className='contatoIcons'>

              <div className='contatoLocal'>
                <FaSearchLocation className="icon" id="logo" />
                <p>Localização</p>
                <p>Rua João José Sabongi, 495 - Vila das Industrias na cidade de Tupã/SP.</p>
              </div>
              <div className='contatoTel'>
              <FaPhoneAlt className="icon" id="logo" />
                <p>Telefones úteis</p>
                <p>(14) 3404-1070</p>
                <p>(14) 3404-1070</p>
                <p>(14) 3404-1070</p>

              </div>
            </div>
        </div>

      <Footer/>
    </div>
  );
}

export default Contato;

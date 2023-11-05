import React from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { FaHandsHoldingChild } from "react-icons/fa6";


import { Link } from 'react-router-dom';

import './Menu.css';

function Menu(menu) {

  return (
    <div>
      <Header />
      <div className='navbar'>
        <div className='dropdown'>
          <button className='dropbtn'>Pacientes
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadpacientes'>Cadastro</Link>
            <Link className='link' to='../pacientes'>Pesquisar</Link>
          </div>
        </div>

        <div className='dropdown'>
          <button className='dropbtn'>Internação
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadinternacao'>Cadastro</Link>
            <Link className='link' to='../internacao'>Pesquisar</Link>
          </div>
        </div>

        <div className='dropdown'>
          <button className='dropbtn'>Prorrogação
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadprorrogacao'>Cadastro</Link>
            <Link className='link' to='../prorrogacao'>Pesquisar</Link>
          </div>
        </div>

        <div className='dropdown'>
          <button className='dropbtn'>Transferência
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadtransferencia'>Cadastro</Link>
            <Link className='link' to='../transferencia'>Pesquisar</Link>
          </div>
        </div>

        <div className='dropdown'>
          <button className='dropbtn'>CID
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadcid'>Cadastro</Link>
            <Link className='link' to='../cid'>Pesquisar</Link>
          </div>
        </div>

        <div className='dropdown'>
          <button className='dropbtn'>Médicos
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadmedicos'>Cadastro</Link>
            <Link className='link' to='../medicos'>Pesquisar</Link>
          </div>
        </div>

        <div className='dropdown'>
          <button className='dropbtn'>Usuários
            <i className='fa fa-caret-down'></i>
          </button>
          <div className='dropcontent'>
            <Link className='link' to='../cadusuarios'>Cadastro</Link>
            <Link className='link' to='../usuarios'>Pesquisar</Link>
          </div>
        </div>
        
        <div className='dropdown'>
          <button className='dropbtn'> <Link className='sair' to='/'>Sair</Link>
            <i className='fa fa-caret-down'></i>
          </button>
        </div>

      </div>

      <div className='menuimg'>
          <FaHandsHoldingChild className="menuicon" id="logo" />
      </div>

      <Footer />
    </div>
  );
}

export default Menu;

import React, { useState, useEffect } from 'react';
import { FaHandsHoldingChild } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';


import './header.css';

function Header({pag}) {

  const [mobile, setMobile] = useState(false);
  let navigate = useNavigate();
  const [logado, setLogado] = useState(false);

  function ativaMenu() {
    if (mobile === false) {
        setMobile(true);
    } else {
        setMobile(false);
    }
  }

  function sair() {
    localStorage.clear();
    window.location.reload(true);
    navigate('/');
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        setLogado(true);
    }
  }, []);

  return (
    <header>
      <nav className="containerNav">
        <div className='menu'>
          <div className='logoMenu'>
            <FaHandsHoldingChild className="icon" id="logo" />
            <label for="" id="titulo">Casa da Criança</label>
          </div>
          <div className="menuGrande">
            <Link to='/' className={pag === 'Home' ? 'active' : ''}>Home</Link>
            <Link to='/contato' className={pag === 'Contato' ? 'active' : ''}>Contato</Link>
            {
              logado ? <span className='menuSair' onClick={() => sair()}>Sair</span> : <Link to='/login' className={pag === 'Login' ? 'active' : ''}>Login</Link>
            }
          </div>
          <div className="menuMobile">
            <a href="#" onClick={ativaMenu} className="icon" id="mIco">
            <MdMenu className="icon" id="menu"/>
            </a>
          </div>
        </div>
        <div className={mobile === false ? "menuMobileExpandidon" : "menuMobileExpandidos"} id="mostraOpMobile">
          <Link to='/' className={pag === 'Home' ? 'active' : ''}>Home</Link>
          <Link to='/contato' className={pag === 'Contato' ? 'active' : ''}>Contato</Link>
          {
            logado ? <span className='menuSair' onClick={() => sair()}>Sair</span> : <Link to='/login' className={pag === 'Login' ? 'active' : ''}>Login</Link>
          }
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import { GiHealthNormal } from "react-icons/gi";

import './header.css';

function Header() {
  return (
    <header>
      <nav className="containerNav">
        <div className='menu'>
          <div className='logoMenu'>
            <GiHealthNormal className="icon" id="logo" />
            <label for="" id="titulo">Casa da Criança</label>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

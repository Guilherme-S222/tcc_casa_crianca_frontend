import React from 'react';

import './footer.css';

import Face from '../../images/icones/facebook.svg';
import What from '../../images/icones/whatsapp.svg';

function Footer() {
  return (
    <footer className="rodape">
      <div className="social">
        <img src={Face} alt="facebook" />
        <img src={What} alt="" />

      </div>
      <p>Casa da Criança | 00.000.000/0000-00</p>
      <p>Rua João José Sabongi, 495 - Vila das Industrias - Tupã/SP | casacrianca@casacrianca.com</p>
    </footer>
  );
}

export default Footer;

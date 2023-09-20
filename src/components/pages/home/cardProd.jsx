import React from 'react';

import './cardProd.css';

function CardProd({produto}) {
  return (
    <div className="cardProd">
      <div className="controlImg">
        <img src={produto.img} alt={produto.txtAltImg} />
      </div>
      <span className="descricao">{produto.nome}</span>
    </div>
  );
}

export default CardProd;

import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

function nomedatabela({ nomedatabela }) {

  const [nomedatabela, setnomedatabela] = useState(
    [
      {
        "nomedatabela": "",
        "nomedatabela": "",
        "nomedatabela": ""
      },
    ]
  );

  return (
    <div >
      <Header pag={'nomedatabela'} />
      <h1 className='listarTitulo'>
        Listar padrão
      </h1>
      <div className='listarContainer'>
        {nomedatabela.map(item => (
          <div className='listarDiv' key={item.nomedatabela}>
            <span className='item'>coluna {item.nomedatabela}</span>
            <span className='item'>coluna {item.nomedatabela}</span>
            <span className='item'>coluna... {item.nomedatabela}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default nomedatabela;

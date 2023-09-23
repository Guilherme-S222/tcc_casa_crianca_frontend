import React, { useState } from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Endereco({ Endereco }) {

  //parei aqui
  const [endereco, setEndereco] = useState (
    [
      {
        "enderec_id": 1,
        "enderec_rua": "Rua das Flores",
        "enderec_num": 123,
        "enderec_bairro": "Bairro X",
        "enderec_complem": "Apto 101",
        "enderec_cidade": "Tupa",
        "enderec_cep": "12345678",
        "enderec_estado": "SP",
        "pct_pront_enderec": 1
      }
    ]
  );

  return (
    <div >
      <Header pag={'Endereco'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Endereço
        </p>
      <Footer/>
    </div>
  );
}

export default Endereco;

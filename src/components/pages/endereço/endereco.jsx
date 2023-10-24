import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import { Link } from 'react-router-dom';

import "../listar_modelo/listar.css";


function Endereco({ Endereco }) {

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
      },
      {
        "enderec_id": 2,
        "enderec_rua": "Rua America",
        "enderec_num": 456,
        "enderec_bairro": "Bairro Y",
        "enderec_complem": null,
        "enderec_cidade": "Quata",
        "enderec_cep": "23456789",
        "enderec_estado": "SP",
        "pct_pront_enderec": 2
      },
      {
        "enderec_id": 3,
        "enderec_rua": "Rua Central",
        "enderec_num": 789,
        "enderec_bairro": "Bairro Z",
        "enderec_complem": "Casa 5",
        "enderec_cidade": "Sao Paulo",
        "enderec_cep": "34567890",
        "enderec_estado": "SP",
        "pct_pront_enderec": 3
      },
      {
        "enderec_id": 4,
        "enderec_rua": "Rua Caigangs",
        "enderec_num": 101,
        "enderec_bairro": "Bairro W",
        "enderec_complem": null,
        "enderec_cidade": "Bastos",
        "enderec_cep": "45678901",
        "enderec_estado": "SP",
        "pct_pront_enderec": 4
      },
      {
        "enderec_id": 5,
        "enderec_rua": "Rua Pereiro Barreto",
        "enderec_num": 20,
        "enderec_bairro": "Bairro V",
        "enderec_complem": "Bloco C",
        "enderec_cidade": "Assis",
        "enderec_cep": "56789012",
        "enderec_estado": "SP",
        "pct_pront_enderec": 5
      }
    ]
  );

  return (
    <div >
      <Header pag={'Endereco'}/>
      <h1 className='listarTitulo'>
        Listar Endereços
      </h1>
      <div className='botoesDiv'>
        <Link to='/cadendereco'><button className='buttonCad' type="button">Cadastrar</button></Link>
      </div>
      <div className='listarContainer'>
        {endereco.map(item => (
          <div className='listarDiv' key={item.enderec_id}>
            <span className='item'>Logradouro: {item.enderec_rua}</span>
            <span className='item'>Número: {item.enderec_num}</span>
            <span className='item'>Bairro: {item.enderec_bairro}</span>
            <span className='item'>Complemento: {item.enderec_complem}</span>
            <span className='item'>Cidade: {item.enderec_cidade}</span>
            <span className='item'>Cep: {item.enderec_cep}</span>
            <span className='item'>Estado: {item.enderec_estado}</span>
            <span className='item'>Prontuário do Paciente: {item.pct_pront_enderec}</span>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Endereco;

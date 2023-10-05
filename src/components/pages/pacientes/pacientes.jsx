import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";


import './Pacientes.css';

function Pacientes() {

  const [pacientes, setPacientes] = useState (
    [
      {
        "pct_pront": 1,
        "pct_cpf": "12345678901",
        "pct_nome": "João da Silva",
        "pct_sexo": "Masculino",
        "pct_sus": "123456789012345",
        "pct_cns": "123456789012345",
        "pct_dtnasc": "1990-05-15T03:00:00.000Z",
        "pct_aih": "1234567890123",
        "pct_bpc": "Não",
        "pct_aposent": "Não",
        "pct_filiacao": "Maria da Silva",
        "pct_natural": "São Paulo",
        "pct_cor": "Branco",
        "pct_rg": "12345678",
        "pct_dataexp": "2010-02-28T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-08-08T11:00:00.000Z"
      },
      {
        "pct_pront": 2,
        "pct_cpf": "98765432101",
        "pct_nome": "Ana Santos",
        "pct_sexo": "Feminino",
        "pct_sus": "987654321098765",
        "pct_cns": "987654321098765",
        "pct_dtnasc": "1985-09-10T03:00:00.000Z",
        "pct_aih": "9876543210123",
        "pct_bpc": "Sim",
        "pct_aposent": "Não",
        "pct_filiacao": "Carla Santos",
        "pct_natural": "Rio de Janeiro",
        "pct_cor": "Pardo",
        "pct_rg": "87654321",
        "pct_dataexp": "2008-11-20T02:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-08-08T12:00:00.000Z"
      },
      {
        "pct_pront": 3,
        "pct_cpf": "45678912301",
        "pct_nome": "Marcos Oliveira",
        "pct_sexo": "Masculino",
        "pct_sus": "456789123045678",
        "pct_cns": "456789123045678",
        "pct_dtnasc": "1978-03-25T03:00:00.000Z",
        "pct_aih": "4567891230123",
        "pct_bpc": "Sim",
        "pct_aposent": "Sim",
        "pct_filiacao": "Ana Oliveira",
        "pct_natural": "Belo Horizonte",
        "pct_cor": "Negro",
        "pct_rg": "65432198",
        "pct_dataexp": "2005-06-10T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-08-09T13:00:00.000Z"
      },
      {
        "pct_pront": 4,
        "pct_cpf": "78901234501",
        "pct_nome": "Maria Souza",
        "pct_sexo": "Feminino",
        "pct_sus": "789012345067890",
        "pct_cns": "789012345067890",
        "pct_dtnasc": "1995-12-18T02:00:00.000Z",
        "pct_aih": "7890123450123",
        "pct_bpc": "Não",
        "pct_aposent": "Sim",
        "pct_filiacao": "Paulo Souza",
        "pct_natural": "Salvador",
        "pct_cor": "Amarelo",
        "pct_rg": "98765432",
        "pct_dataexp": "2015-08-05T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-08-09T19:00:00.000Z"
      },
      {
        "pct_pront": 5,
        "pct_cpf": "23456789012",
        "pct_nome": "Carlos Ferreira",
        "pct_sexo": "Masculino",
        "pct_sus": "234567890123456",
        "pct_cns": "234567890123456",
        "pct_dtnasc": "2000-11-02T02:00:00.000Z",
        "pct_aih": "2345678901234",
        "pct_bpc": "Não",
        "pct_aposent": "Não",
        "pct_filiacao": "Lucia Ferreira",
        "pct_natural": "Porto Alegre",
        "pct_cor": "Branco",
        "pct_rg": "34567890",
        "pct_dataexp": "2020-03-15T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-08-10T22:00:00.000Z"
      }
    ]
  );

  return (
    <div >
      <Header pag={'Pacientes'}/>
      <h1 className='listarTitulo'>
        Listar Pacientes
      </h1>
      <div className='listarContainer'>
        {pacientes.map(item => (
          <div className='listarDiv' key={item.pct_pront}>
            <span className='item'>Prontuário Nº: {item.pct_pront}</span>
            <span className='item'>CPF: {item.pct_cpf}</span>
            <span className='item'>Nome: {item.pct_nome}</span>
            <span className='item'>Sexo: {item.pct_sexo}</span>
            <span className='item'>SUS: {item.pct_sus}</span>
            <span className='item'>CNS: {item.pct_cns}</span>
            <span className='item'>Data de Nascimento: {item.pct_dtnasc}</span>
            <span className='item'>AIH: {item.pct_aih}</span>
            <span className='item'>BPC: {item.pct_bpc}</span>
            <span className='item'>Aposentadoria: {item.pct_aposent}</span>
            <span className='item'>Filiação: {item.pct_filiacao}</span>
            <span className='item'>Natural: {item.pct_natural}</span>
            <span className='item'>Cor: {item.pct_cor}</span>
            <span className='item'>RG: {item.pct_rg}</span>
            <span className='item'>Data de Expedição: {item.pct_dataexp}</span>
            <span className='item'>Orgão Emissor: {item.pct_orgemissor}</span>
            <span className='item'>Data do Cadastro: {item.pct_dtcad}</span>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Pacientes;

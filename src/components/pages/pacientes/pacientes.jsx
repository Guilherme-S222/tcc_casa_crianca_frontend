import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";
import './Pacientes.css';

import api from '../../services/api';

function Pacientes() {

  const [pacientes, setPacientes] = useState(
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
      },
      {
        "pct_pront": 8,
        "pct_cpf": "",
        "pct_nome": "Matheus Adriano",
        "pct_sexo": "Masculino",
        "pct_sus": "23941783823456",
        "pct_cns": "23941783823456",
        "pct_dtnasc": "1983-11-09T03:00:00.000Z",
        "pct_aih": "4335678934934",
        "pct_bpc": "Não",
        "pct_aposent": "Não",
        "pct_filiacao": "Maria Aparecida",
        "pct_natural": "Santos",
        "pct_cor": "Preto",
        "pct_rg": "88567860",
        "pct_dataexp": "2010-08-20T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-16T01:00:00.000Z"
      },
      {
        "pct_pront": 13,
        "pct_cpf": "13246512365",
        "pct_nome": "José da Silva",
        "pct_sexo": "Masculino",
        "pct_sus": "423434",
        "pct_cns": "423432432",
        "pct_dtnasc": "2000-10-10T02:00:00.000Z",
        "pct_aih": "432432432",
        "pct_bpc": "Não",
        "pct_aposent": "Não",
        "pct_filiacao": "Maria Aparecida",
        "pct_natural": "São Vicente",
        "pct_cor": "Branco",
        "pct_rg": "455555",
        "pct_dataexp": "2000-10-10T02:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-26T03:00:00.000Z"
      },
      {
        "pct_pront": 14,
        "pct_cpf": "49443408810",
        "pct_nome": "Guilherme Henrique",
        "pct_sexo": "Masculino",
        "pct_sus": "",
        "pct_cns": "",
        "pct_dtnasc": "2003-02-15T02:00:00.000Z",
        "pct_aih": "",
        "pct_bpc": "",
        "pct_aposent": "",
        "pct_filiacao": "Maria Souza e Sebastião",
        "pct_natural": "Quata",
        "pct_cor": "Branca",
        "pct_rg": "65494831",
        "pct_dataexp": "2010-01-01T02:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-26T03:00:00.000Z"
      },
      {
        "pct_pront": 17,
        "pct_cpf": "48965432109",
        "pct_nome": "Marcio Jose dos Santos",
        "pct_sexo": "Masculino",
        "pct_sus": "65491347",
        "pct_cns": "65491347",
        "pct_dtnasc": "1966-08-15T03:00:00.000Z",
        "pct_aih": "65491347",
        "pct_bpc": "65491347",
        "pct_aposent": "Não",
        "pct_filiacao": "João Silva e Maria Santos",
        "pct_natural": "Tupã",
        "pct_cor": "Preto",
        "pct_rg": "47731968",
        "pct_dataexp": "2011-07-15T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-26T03:00:00.000Z"
      },
      {
        "pct_pront": 18,
        "pct_cpf": "99915610873",
        "pct_nome": "Maria Aparecida",
        "pct_sexo": "Feminino",
        "pct_sus": "65494468",
        "pct_cns": "65494468",
        "pct_dtnasc": "1977-06-10T03:00:00.000Z",
        "pct_aih": "65494468",
        "pct_bpc": "65494468",
        "pct_aposent": "Não",
        "pct_filiacao": "Antonio e Rosana",
        "pct_natural": "Tupã",
        "pct_cor": "Branca",
        "pct_rg": "61943781",
        "pct_dataexp": "2020-08-22T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-26T03:00:00.000Z"
      },
      {
        "pct_pront": 21,
        "pct_cpf": "94030849900",
        "pct_nome": "Matheus da Silva",
        "pct_sexo": "Masculino",
        "pct_sus": "64682200",
        "pct_cns": "64682200",
        "pct_dtnasc": "1999-02-15T02:00:00.000Z",
        "pct_aih": "64682200",
        "pct_bpc": "64682200",
        "pct_aposent": "Não",
        "pct_filiacao": "Maria e Rafael",
        "pct_natural": "Tupã",
        "pct_cor": "Pardo",
        "pct_rg": "74326591",
        "pct_dataexp": "2008-08-15T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-27T03:00:00.000Z"
      },
      {
        "pct_pront": 24,
        "pct_cpf": "65412384601",
        "pct_nome": "Lucas",
        "pct_sexo": "Masculino",
        "pct_sus": "65484611",
        "pct_cns": "65484611",
        "pct_dtnasc": "2002-10-14T03:00:00.000Z",
        "pct_aih": "65484611",
        "pct_bpc": "65484611",
        "pct_aposent": "Não",
        "pct_filiacao": "João e Rosana",
        "pct_natural": "Tupã",
        "pct_cor": "Branco",
        "pct_rg": "65432186",
        "pct_dataexp": "2008-05-02T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-27T03:00:00.000Z"
      },
      {
        "pct_pront": 25,
        "pct_cpf": "61108588861",
        "pct_nome": "Jose Matheus",
        "pct_sexo": "Masculino",
        "pct_sus": "1310844",
        "pct_cns": "1310844",
        "pct_dtnasc": "1989-09-20T03:00:00.000Z",
        "pct_aih": "1310844",
        "pct_bpc": "1310844",
        "pct_aposent": "Sim",
        "pct_filiacao": "Arthur e Regina",
        "pct_natural": "Tupã",
        "pct_cor": "Branco",
        "pct_rg": "65804602",
        "pct_dataexp": "2015-08-10T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-27T03:00:00.000Z"
      },
      {
        "pct_pront": 26,
        "pct_cpf": "97461800016",
        "pct_nome": "Gabriel Matheus Silva",
        "pct_sexo": "Masculino",
        "pct_sus": "9494310",
        "pct_cns": "9494310",
        "pct_dtnasc": "1996-08-30T03:00:00.000Z",
        "pct_aih": "9494310",
        "pct_bpc": "9494310",
        "pct_aposent": "Não",
        "pct_filiacao": "Douglas e Shirley",
        "pct_natural": "Tupã",
        "pct_cor": "Branco",
        "pct_rg": "46308618",
        "pct_dataexp": "2005-10-15T03:00:00.000Z",
        "pct_orgemissor": "SSP",
        "pct_dtcad": "2023-10-27T03:00:00.000Z"
      }
    ]
  );

  // const [ posts, setPosts ] = useState([])

  // useEffect(() => {
  //   api.get('/pacientes')
  //   .then((response) => {
  //     setPosts(response.data);

  //   })
  //   .catch(() => {
  //     console.log("Deu ruim!");

  //   })

  // }, []);

  const [busca, setBusca] = useState('');

  const prontuariosFiltrados = useMemo(() => {
    return pacientes.filter((pacientes) => pacientes.pct_pront.toString() === (busca));
  }, [busca, pacientes]);

  return (
    <div >
      <Header pag={'Pacientes'}/>

      <h1 className='listarTitulo'>
        Pesquisar Pacientes
      </h1>

      <div className='botoesDiv'>
        <Link to='/cadpacientes'><button className='buttonCad' type="button">Cadastrar</button></Link>
        <Link to='/menu'><button className='buttonCad' type="button">Voltar</button></Link>
      </div>

      <div className='search'>
        <label className='labelSearch'>Buscar Prontuário:</label>
        <input
        className='inputSearch'
        type='text'
        placeholder='Digite o prontuário aqui'
        value={busca}
        onChange={(event) => setBusca(event.target.value) } />
      </div>

      <div className='listarContainer'>
        {prontuariosFiltrados.map(item => (
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

            <div>
              <button className='buttonEdt' type="button"><Link className='link' to='#'>Editar</Link></button>
              <button className='buttonViz' type="button"><Link className='link' to='#'>Visualizar</Link></button>
              <button className='buttonExc' type="button"><Link className='link' to='#'>Remover</Link></button>
            </div>

          </div>

        ))}
      </div>

      <Footer/>
    </div>
  );
}

export default Pacientes;

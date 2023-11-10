import api from '../../services/api';

import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState

import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";
import './Pacientes.css';


function Pacientes() {

  const [pacientes, setPacientes] = useState([])

  const getPacientes = async() => {

    try {
      const response = await api.get("/pacientes");
      const data = response.data;
      if (Array.isArray(data.Itens)) {
        setPacientes(data.Itens);
      } else {
        console.error("Os dados recebidos não são um array valido");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPacientes();
  }, [])

  const [busca, setBusca] = useState('');

  const prontuariosFiltrados = useMemo(() => {
    return pacientes.filter((paciente) => paciente.pct_pront.toString() === (busca));
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

import api from '../../services/api';
import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";


function Internação() {

  const [internacao, setInternacao] = useState ([])

  const getInternacao = async() => {
    try {
      const response = await api.get("/internacao");
      const data = response.data;
      console.log("Dados recebidos da API:", data);
      if (Array.isArray(data.Itens)){
        setInternacao(data.Itens);
      } else {
        console.error("Os dados recebidos não são um array válido");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getInternacao()
  }, []);

  const [busca, setBusca] = useState('');

  const internacoesFiltradas = useMemo(() => {
    return internacao.filter((internacoes) => internacoes.pct_pront.toString() === (busca));
  }, [busca, internacao]);

  function converteData(dtBd) {
    let data = new Date(dtBd);
    return data.getFullYear() + '-' + pad(data.getUTCMonth() + 1) + '-' + pad(data.getDate());
  }

  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  return (
    <div >
      <Header pag={'Internacao'}/>

      <h1 className='listarTitulo'>
        Pesquisar Internações
      </h1>

      <div className='botoesDiv'>
        <Link to='/cadinternacao'><button className='buttonCad' type="button">Cadastrar</button></Link>
        <Link to='/menu'><button className='buttonCad' type="button">Voltar</button></Link>
      </div>

      <div className='search'>
        <label className='labelSearch'>Prontuário do Paciente:</label>
        <input
        className='inputSearch'
        type='text'
        placeholder='Digite o prontuário do paciente aqui'
        value={busca}
        onChange={(event) => setBusca(event.target.value)} />
      </div>

      <div className='listarContainer'>
        {internacoesFiltradas.map(item => (
          <div className='listarDiv' key={item.intern_id}>
            <span className='item'>Prontuário do Paciente: {item.pct_pront}</span>
            <span className='item'>Nome do Paciente: {item.pct_nome}</span>
            <span className='item'>Internação nº: {item.intern_id}</span>
            <span className='item'>Data de internacão: {item.intern_data}</span>
            <span className='item'>Data de saída: {item.intern_dtsaida}</span>
            <span className='item'>Tipo de saída: {item.intern_tpsaida}</span>
            <span className='item'>Cid: {item.cid_cid}</span>
            <span className='item'>Descrição do Cid: {item.cid_descri}</span>
            <span className='item'>Status do Cid: {item.intercid_status}</span>
            <span className='item'>Nome do Médico: {item.medic_nome}</span>
            <span className='item'>Usuário: {item.user_nome}</span>

            <div>

              <Link className='link' to={`/cadinternacao/${item.intern_id}`}>
                <button className='buttonEdt' type="button">Editar</button>
              </Link>

              {/* <Link className='link' to={`/internacaocid/${item.intern_id}`}>
                <button className='buttonEdt' type="button">Cid</button>
              </Link> */}

            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Internação;

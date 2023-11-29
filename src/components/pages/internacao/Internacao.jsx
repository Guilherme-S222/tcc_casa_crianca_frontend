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
    return internacao.filter((internacoes) => internacoes.pct_pront_intern.toString() === (busca));
  }, [busca, internacao]);

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
            <span className='item'>Internação: {item.intern_id}</span>
            <span className='item'>Data de internacão: {item.intern_data}</span>
            <span className='item'>Data de saída: {item.intern_dtsaida}</span>
            <span className='item'>Tipo de saída: {item.intern_tpsaida}</span>
            <span className='item'>ID do Médico: {item.medic_id_intern}</span>
            <span className='item'>Usuário: {item.user_id_intern}</span>
            <span className='item'>Prontuário do Paciente: {item.pct_pront_intern}</span>

            <div>

              <Link className='link' to={`/cadinternacao/${item.intern_id}`}>
                <button className='buttonEdt' type="button">Editar</button>
              </Link>

              <Link className='link' to={`/internacaocid/${item.intern_id}`}>
                <button className='buttonEdt' type="button">Cid</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Internação;

import api from '../../services/api';

import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState

import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

function Medicos() {

  const [medicos, setMedicos] = useState ([])

  const getMedicos = async() => {
    try {
      const response = await api.get("/medico");
      const data = response.data;
      if (Array.isArray(data.Itens)){
        setMedicos(data.Itens);
      } else {
        console.error("Os dados recebidos não são um array válido");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMedicos()
  }, []);

  const [busca, setBusca] = useState('');

  const medicoFiltrado = useMemo(() => {
    return medicos.filter((medico) => medico.medic_crm.toString().startsWith(busca));
  }, [busca, medicos]);

  return (
    <div >
      <Header pag={'Medicos'}/>
      <h1 className='listarTitulo'>
        Pesquisar Médicos
      </h1>

      <div className='botoesDiv'>
        <Link to='/cadmedicos'><button className='buttonCad' type="button">Cadastrar</button></Link>
        <Link to='/menu'><button className='buttonCad' type="button">Voltar</button></Link>
      </div>

      <div className='search'>
        <label className='labelSearch'>CRM do Médico:</label>
        <input
        className='inputSearch'
        type='text'
        placeholder='Digite o CRM do Médico aqui'
        value={busca}
        onChange={(event) => setBusca(event.target.value)} />
      </div>

      <div className='listarContainer'>
        {medicoFiltrado.map(item => (
          <div className='listarDiv' key={item.medic_crm}>
            {/* <span className='item'>Identificador: {item.medic_id}</span> */}
            <span className='item'>CRM: {item.medic_crm}</span>
            <span className='item'>Nome: {item.medic_nome}</span>
            <span className='item'>CPF: {item.medic_cpf}</span>
            <span className='item'>Especialidade: {item.medic_especi}</span>
            <span className='item'>Telefone: {item.medic_tel}</span>

            {/* <div>
              <button className='buttonEdt' type="button"><Link className='link' to='#'>Editar</Link></button>
            </div> */}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Medicos;

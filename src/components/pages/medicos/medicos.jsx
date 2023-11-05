import React, { useState, useMemo } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

function Medicos() {

  const [medicos] = useState (
    [
      {
        "medic_crm": "12345",
        "medic_nome": "Dr. João Silva",
        "medic_cpf": "12345678901",
        "medic_especi": "Cardiologia",
        "medic_tel": "11 12345678"
      },
      {
        "medic_crm": "23456",
        "medic_nome": "Dra. Carla Mendes",
        "medic_cpf": "34567890123",
        "medic_especi": "Pediatria",
        "medic_tel": "66 67890123"
      },
      {
        "medic_crm": "34567",
        "medic_nome": "Dra. Sandra Lima",
        "medic_cpf": "98765442101",
        "medic_especi": "Oftalmologia",
        "medic_tel": "88 89012345"
      },
      {
        "medic_crm": "45678",
        "medic_nome": "Dra. Ana Souza",
        "medic_cpf": "78901234501",
        "medic_especi": "Ginecologia",
        "medic_tel": "44 45678901"
      },
      {
        "medic_crm": "54321",
        "medic_nome": "Dra. Maria Santos",
        "medic_cpf": "98765432101",
        "medic_especi": "Clínica Geral",
        "medic_tel": "22 23456789"
      },
      {
        "medic_crm": "66890",
        "medic_nome": "Dra. Camila Martins",
        "medic_cpf": "78701234501",
        "medic_especi": "Psiquiatria",
        "medic_tel": "00 12345678"
      },
      {
        "medic_crm": "67890",
        "medic_nome": "Dr. Pedro Oliveira",
        "medic_cpf": "45678912301",
        "medic_especi": "Ortopedia",
        "medic_tel": "33 34567890"
      },
      {
        "medic_crm": "78901",
        "medic_nome": "Dr. Lucas Almeida",
        "medic_cpf": "12345678601",
        "medic_especi": "Neurologia",
        "medic_tel": "77 78901234"
      },
      {
        "medic_crm": "89012",
        "medic_nome": "Dr. Rafael Souza",
        "medic_cpf": "95678912301",
        "medic_especi": "Cirurgia Geral",
        "medic_tel": "99 90123456"
      },
      {
        "medic_crm": "98765",
        "medic_nome": "Dr. Marcos Ferreira",
        "medic_cpf": "23456789012",
        "medic_especi": "Dermatologia",
        "medic_tel": "55 56789012"
      }
    ]
  );

  const [busca, setBusca] = useState('');

  const medicoFiltrado = useMemo(() => {
    return medicos.filter((medicos) => medicos.medic_crm.toString().includes(busca));
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
            <span className='item'>CRM: {item.medic_crm}</span>
            <span className='item'>Nome: {item.medic_nome}</span>
            <span className='item'>CPF: {item.medic_cpf}</span>
            <span className='item'>Especialidade: {item.medic_especi}</span>
            <span className='item'>Telefone: {item.medic_tel}</span>

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

export default Medicos;

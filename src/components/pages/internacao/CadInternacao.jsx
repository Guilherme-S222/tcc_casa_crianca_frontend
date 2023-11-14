import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import api from '../../services/api';

function CadInternacao() {

  let navigate = useNavigate();

  const [intern_id, setintern_id] = useState('');
  const [intern_data, setintern_data] = useState('');
  const [intern_dtsaida, setintern_dtsaida] = useState('');
  const [intern_tpsaida, setintern_tpsaida] = useState('');
  const [medic_crm_intern, setmedic_crm_intern] = useState('');
  const [user_id_intern, setuser_id_intern] = useState('');
  const [pct_pront_intern, setpct_pront_intern] = useState('');

  //validações
  const [Val_id, setVal_id] = useState('form-control');
  const [Err_id, setErr_id] = useState('');
  const [Val_data, setVal_data] = useState('form-control');
  const [Err_data, setErr_data] = useState('');
  const [Val_dtsaida, /*setVal_dtsaida*/] = useState('form-control');
  const [Err_dtsaida, /*setErr_dtsaida*/] = useState('');
  const [Val_tpsaida, /*setVal_tpsaida*/] = useState('form-control');
  const [Err_tpsaida, /*setErr_tpsaida*/] = useState('');
  const [Val_medic_crm_intern, setVal_medic_crm_intern] = useState('form-control');
  const [Err_medic_crm_intern, setErr_medic_crm_intern] = useState('');
  const [Val_user_id_intern, setVal_user_id_intern] = useState('form-control');
  const [Err_user_id_intern, setErr_user_id_intern] = useState('');
  const [Val_pct_pront_intern, setVal_pct_pront_intern] = useState('form-control');
  const [Err_pct_pront_intern, setErr_pct_pront_intern] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    if (valida()){
      cadastrar()
    }
  }

  //validações
  function valida(){
    let validado = true;

    if (intern_id === ''){
      setVal_id('form-control error');
      setErr_id('Preencha o id da internação!')
      validado = false;
    } else {
      setVal_id('form-control success!')
    }
    if (intern_data === ''){
      setVal_data('form-control error');
      setErr_data('Preencha a data da internação!')
      validado = false;
    } else {
      setVal_data('form-control success!')
    }
    if (medic_crm_intern === ''){
      setVal_medic_crm_intern('form-control error');
      setErr_medic_crm_intern('Preencha o CRM do médico!')
      validado = false;
    } else {
      setVal_medic_crm_intern('form-control success!')
    }
    if (user_id_intern === ''){
      setVal_user_id_intern('form-control error');
      setErr_user_id_intern('Preencha o id do usuário!')
      validado = false;
    } else {
      setVal_user_id_intern('form-control success!')
    }
    if (pct_pront_intern === ''){
      setVal_pct_pront_intern('form-control error');
      setErr_pct_pront_intern('Preencha o prontuário do paciente!')
      validado = false;
    } else {
      setVal_pct_pront_intern('form-control success!')
    }

    return validado;

  }

  async function cadastrar(){

    try {
      const dados = {
        intern_id,
        intern_data,
        intern_dtsaida,
        intern_tpsaida,
        medic_crm_intern,
        user_id_intern,
        pct_pront_intern
      }

      //API
      const response = await api.post('/internacao', dados);
      console.log(response);
      if (response.data.confirma === true){
        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        const confirmacao = window.confirm("Internação cadastrada com sucesso! Deseja cadastrar o CID dessa internação?");

        if (confirmacao){
          navigate('/internacaocid');
        } else {
          navigate('/menu');
        }

      } else {
        alert('Erro: ' + response.data.message)
      }
    } catch (error){

      if (error.response){
        alert(error.response.data.message);
      } else {
        alert(error);
      }
    }
  }

  return (
    <div >
      <Header pag={'CadIntercacao'}/>
        <div className='listarTitulo'>
          <h1>
            Cadastro de Internação
          </h1>
        </div>

        <div className='divForm'>

          <form className='cadForm' onSubmit={handleSubmit}>

            <div className={Val_id} id="Val_id">
              <label className='lblForm'>
                Internação:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite a internação"
                  onChange={v => setintern_id(v.target.value)}
                  value={intern_id}
                />
              </label>
              <small className='small' id='intern_id'>{Err_id}</small>
            </div>

            <div className={Val_data} id="Val_data">
              <label className='lblForm'>
                Data da internação:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setintern_data(v.target.value)}
                  value={intern_data}
                />
              </label>
              <small className='small' id='intern_data'>{Err_data}</small>
            </div>

            <div className={Val_dtsaida} id="Val_dtsaida">
              <label className='lblForm'>
                Data de Saída:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setintern_dtsaida(v.target.value)}
                  value={intern_dtsaida}
                />
              </label>
              <small className='small' id='intern_dtsaida'>{Err_dtsaida}</small>
            </div>

            <div className={Val_tpsaida} id="Val_tpsaida">
              <label className='lblForm'>
                Tipo de Saída:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o tipo de saída: (alta médica ou transferência)"
                  onChange={v => setintern_tpsaida(v.target.value)}
                  value={intern_tpsaida}
                />
              </label>
              <small className='small' id='intern_tpsaida'>{Err_tpsaida}</small>
            </div>

            <div className={Val_medic_crm_intern} id="Val_medic_crm_intern">
              <label className='lblForm'>
                CRM do Médico:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o CRM do médico"
                  onChange={v => setmedic_crm_intern(v.target.value)}
                  value={medic_crm_intern}
                />
              </label>
              <small className='small' id='medic_crm_intern'>{Err_medic_crm_intern}</small>
            </div>

            <div className={Val_user_id_intern} id="Val_user_id_intern">
              <label className='lblForm'>
                Usuário:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o identificador do usuário"
                  onChange={v => setuser_id_intern(v.target.value)}
                  value={user_id_intern}
                />
              </label>
              <small className='small' id='user_id_intern'>{Err_user_id_intern}</small>
            </div>

            <div className={Val_pct_pront_intern} id="Val_pct_pront_intern">
              <label className='lblForm'>
                Prontuário do Paciente:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente"
                  onChange={v => setpct_pront_intern(v.target.value)}
                  value={pct_pront_intern}
                />
              </label>
              <small className='small' id='pct_pront_intern'>{Err_pct_pront_intern}</small>
            </div>

              <div className='divbtn'>
                <Link className='linkbtn' to='../menu'><button className='cancbtn' >Cancelar</button></Link>
                <button type="submit" className='cadbtn' >Salvar</button>
              </div>

            </form>

          </div>
      <Footer/>
    </div>
  );
}

export default CadInternacao;

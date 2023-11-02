import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import api from '../../services/api';

function CadMedicos() {

  let navigate = useNavigate();

  const [medic_crm, setmedic_crm] = useState('');
  const [medic_nome, setmedic_nome] = useState('');
  const [medic_cpf, setmedic_cpf] = useState('');
  const [medic_especi, setmedic_especi] = useState('');
  const [medic_tel, setmedic_tel] = useState('');

  //validações
  const [Val_crm, setVal_crm] = useState('form-control');
  const [Err_crm, setErr_crm] = useState('');
  const [Val_nome, setVal_nome] = useState('form-control');
  const [Err_nome, setErr_nome] = useState('');
  const [Val_cpf, setVal_cpf] = useState('form-control');
  const [Err_cpf, setErr_cpf] = useState('');
  const [Val_especi, setVal_especi] = useState('form-control');
  const [Err_especi, setErr_especi] = useState('');
  const [Val_tel, setVal_tel] = useState('form-control');
  const [Err_tel, setErr_tel] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    if(valida()){
      cadastrar()
    }
  }

  //validações
  function valida(){
    let validado = true;

    if (medic_crm === ''){
      setVal_crm('form_control error');
      setErr_crm('Preencha o CRM do Médico!')
      validado = false;
    } else {
      setVal_crm('form-control success!')
    }

    if (medic_cpf === '' || medic_cpf !== 11){
      setVal_cpf('form_control error');
      setErr_cpf('Preencha o CPF do Médico!')
      validado = false;
    } else {
      setVal_cpf('form-control success!')
    }

    if (medic_nome === ''){
      setVal_nome('form_control error');
      setErr_nome('Preencha o nome do Médico!')
      validado = false;
    } else {
      setVal_nome('form-control success!')
    }
    
    if (medic_especi === ''){
      setVal_especi('form_control error');
      setErr_especi('Preencha a especialidade do Médico!')
      validado = false;
    } else {
      setVal_especi('form-control success!')
    }

    if (medic_tel === ''){
      setVal_tel('form_control error');
      setErr_tel('Preencha o telefone do Médico!')
      validado = false;
    } else {
      setVal_tel('form-control success!')
    }

    return validado;
  }
  
  async function cadastrar(){

    try {
      const dados = {
        medic_crm,
        medic_nome,
        medic_cpf,
        medic_especi,
        medic_tel
      }

      //API
      const response = await api.post('/medico', dados);
      console.log(response);
      if (response.data.confirma === true){
        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        alert('Médico cadastrado com sucesso!')
        navigate('/menu');

      } else {
        alert('Erro: ' + response.data.message)
      }

    } catch (error){

      if (error.message){
        alert(error.response.data.message);
      } else {
        alert(error);
      }
    }
  }

  return (
    <div >
      <Header pag={'CadMedicos'}/>
      <div className='listarTitulo'>
        <h1>
          Cadastro de Médico
        </h1>
      </div>
      
      <div className='divForm'>
        
        <form className='cadForm' onSubmit={handleSubmit}>

        <div className={Val_crm} id='Val_crm'>
          <label className='lblForm'>
            CRM do Médico: 
            <input 
              className='inputForm' 
              type='text' 
              placeholder= "Digite o CRM do médico"
              onChange={v => setmedic_crm(v.target.value)}
              value={medic_crm}
            />
          </label>
          <small className='small' id='medic_crm'>{Err_crm}</small>
        </div>
        
        <div className={Val_nome} id='Val_nome'>
          <label className='lblForm'>
            Nome do Médico: 
            <input 
              className='inputForm' 
              type='text' 
              placeholder= "Digite o nome do médico"
              onChange={v => setmedic_nome(v.target.value)}
              value={medic_nome}
            />
          </label>
          <small className='small' id='medic_nome'>{Err_nome}</small>
        </div>
        
        <div className={Val_cpf} id='Val_cpf'>
          <label className='lblForm'>
            CPF do Médico: 
            <input 
              className='inputForm' 
              type='text' 
              placeholder= "Digite o CPF do médico"
              onChange={v => setmedic_cpf(v.target.value)}
              value={medic_cpf}
            />
          </label>
          <small className='small' id='medic_cpf'>{Err_cpf}</small>
        </div>
        
        <div className={Val_especi} id='Val_especi'>
          <label className='lblForm'>
            Especialidade do Médico: 
            <input 
              className='inputForm' 
              type='text' 
              placeholder= "Digite a especialidade do médico"
              onChange={v => setmedic_especi(v.target.value)}
              value={medic_especi}
            />
          </label>
          <small className='small' id='medic_especi'>{Err_especi}</small>
        </div>
        
        <div className={Val_tel} id='Val_tel'>
          <label className='lblForm'>
            Telefone do Médico: 
            <input 
              className='inputForm' 
              type='text' 
              placeholder= "Digite o telefone do médico"
              onChange={v => setmedic_tel(v.target.value)}
              value={medic_tel}
            />
          </label>
          <small className='small' id='medic_tel'>{Err_tel}</small>
        </div>
          
          <div className='divbtn'>
            <Link className='linkbtn' to='../menu'><button className='cancbtn' >Cancelar</button></Link>
            <button type="submit" className='cadbtn' >Cadastrar</button>
          </div>

        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default CadMedicos;

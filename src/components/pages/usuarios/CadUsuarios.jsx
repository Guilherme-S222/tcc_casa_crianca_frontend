import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import api from '../../services/api';

function CadUsuarios() {

  let navigate = useNavigate();

  const [user_id, setuser_id] = useState('');
  const [user_nome, setuser_nome] = useState('');
  const [user_senha, setuser_senha] = useState('');
  const [insti_id_user, setinsti_id_user] = useState('');

  //validações
  const [Val_id, setVal_id] = useState('form-control');
  const [Err_id, setErr_id] = useState('');
  const [Val_nome, setVal_nome] = useState('form-control');
  const [Err_nome, setErr_nome] = useState('');
  const [Val_senha, setVal_senha] = useState('form-control');
  const [Err_senha, setErr_senha] = useState('');
  const [Val_insti, setVal_insti] = useState('form-control');
  const [Err_insti, setErr_insti] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    if(valida()){
      cadastrar()
    }
  }

  //validações
  function valida(){
    let validado = true;

    if (user_id === ''){
      setVal_id('form-control error');
      setErr_id('Preencha o ID do usuário');
      validado = false;
    } else {
      setVal_id('form-control success!');
    }

    if (user_nome === ''){
      setVal_nome('form-control error');
      setErr_nome('Preencha o nome do usuário');
      validado = false;
    } else {
      setVal_nome('form-control success!');
    }

    if (user_senha === ''){
      setVal_senha('form-control error');
      setErr_senha('Preencha a senha do usuário');
      validado = false;
    } else {
      setVal_senha('form-control success!');
    }

    if (insti_id_user === ''){
      setVal_insti('form-control error');
      setErr_insti('Preencha o ID da instituição');
      validado = false;
    } else {
      setVal_insti('form-control success!');
    }

    return validado;

  }

  async function cadastrar(){

    try {
      const dados = {
        user_id,
        user_nome,
        user_senha,
        insti_id_user
      }

      //API
      const response = await api.post('/usuario', dados);
      console.log(response);
      if (response.data.confirma === true){
        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          'acesso': response.data.tipo
        };
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        alert('Usuário cadastrado com sucesso!');
        navigate('/menu');

      } else {
        alert('Error: ' + response.data.message);
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
    <div>
      <Header pag={'CadUsuarios'} />
        <div className='listarTitulo'>
          <h1>
            Cadastro de Usuários
          </h1>
        </div>

        <div className='divForm'>

          <form className='cadForm' onSubmit={handleSubmit}>

          <div className={Val_id} id='Val_id'>
            <label className='lblForm'>
              ID do Usuário:
              <input
                className='inputForm'
                type='text'
                placeholder= "Digite o ID do usuário"
                onChange={v => setuser_id(v.target.value)}
                value={user_id}
              />
            </label>
            <small className='small' id='user_id'>{Err_id}</small>
          </div>

          <div className={Val_nome} id='Val_nome'>
            <label className='lblForm'>
              Nome do Usuário:
              <input
                className='inputForm'
                type='text'
                placeholder= "Digite o nome do usuário"
                onChange={v => setuser_nome(v.target.value)}
                value={user_nome}
              />
            </label>
            <small className='small' id='user_nome'>{Err_nome}</small>
          </div>

          <div className={Val_senha} id='Val_senha'>
            <label className='lblForm'>
              Senha do Usuário:
              <input
                className='inputForm'
                type='password'
                placeholder= "Digite a senha do usuário"
                onChange={v => setuser_senha(v.target.value)}
                value={user_senha}
              />
            </label>
            <small className='small' id='user_senha'>{Err_senha}</small>
          </div>

          <div className={Val_insti} id='Val_insti'>
            <label className='lblForm'>
              Instituição vinculada ao Usuário:
              <input
                className='inputForm'
                type='text'
                placeholder= "Digite a instituição do usuário"
                onChange={v => setinsti_id_user(v.target.value)}
                value={insti_id_user}
              />
            </label>
            <small className='small' id='insti_user_id'>{Err_insti}</small>
          </div>

            <div className='divbtn'>
              <Link className='linkbtn' to='/'><button className='cancbtn' >Cancelar</button></Link>
              <button type="submit" className='cadbtn' >Salvar</button>
            </div>

          </form>
        </div>
      <Footer />
    </div>
  );
}

export default CadUsuarios;

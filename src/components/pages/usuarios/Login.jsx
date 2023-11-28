import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdLogin } from "react-icons/md";

import Header from '../../header/header';
import Footer from '../../footer/footer';

import api from '../../services/api';

import './Login.css';

function LoginUsu() {

  let navigate = useNavigate();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    logar();
  }

  async function logar(event){
    try{
      const dados = {
        login,
        senha
      }
      const response = await api.post('/login', dados);

      if (response.data.confirma === true){
        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));
        navigate('/menu');

      } else {
        alert('Erro: ' + response.data.message)
      }

    } catch(error){
      if (error.response){
        alert(error.response.data.message);
      } else {
        alert(error);
      }
    }
  }

  return(
    <>
      <Header pag={'login'} />
      <div className='containerLog'>
        <div>
          <h2>Acessar o login</h2>
        </div>
        <form id='form' className='form' autoComplete='off' onSubmit={handleSubmit}>
          <input
            type= "text"
            id= "login"
            placeholder= "Usuário"
            onChange={v => setLogin(v.target.value)}
            value={login}
          />
          <input
            type= "password"
            id= "password"
            placeholder= "Senha"
            onChange={v => setSenha(v.target.value)}
            value={senha}
          />
          <div className='info'>
            <Link to='/CadUsuarios'>Não tenho cadastro</Link>
            <Link to='#'>Esqueci o email</Link>
            {/* <Link to='../menu'>*</Link> */}
          </div>
          <button type="submit" className='botao'><MdLogin className='ico' />Entrar</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
export default LoginUsu;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import Cid from "./Cid";

import api from '../../services/api';

function CadCid() {

  let navigate = useNavigate();

  const [cid_id, setcid_id] = useState('');
  const [cid_cid, setcid_cid] = useState('');
  const [cid_descri, setcid_descri] = useState('');

  //validações
  const [Val_id, setVal_id] = useState('form-control');
  const [Err_id, setErr_id] = useState('');
  const [Val_cid, setVal_cid] = useState('form-control');
  const [Err_cid, setErr_cid] = useState('');
  const [Val_descri, setVal_descri] = useState('form-control');
  const [Err_descri, setErr_descri] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    if (valida()){
      cadastrar()
    }
  }

  //validações
  function valida(){
    let validado = true;

    if (cid_id === ''){
      setVal_id('form-control error');
      setErr_id('Preencha o id da internação!')
      validado = false;
    } else {
      setVal_id('form-control sucess!')
    }

    if (cid_cid === ''){
      setVal_cid('form-control error');
      setErr_cid('Preencha o CID');
      validado = false;
    } else {
      setVal_cid('form-control success!')
    }

    if (cid_descri === ''){
      setVal_descri('form-control error');
      setErr_descri('Preencha a descrição do CID');
      validado = false;
    } else {
      setVal_descri('form-control success!')
    }

    return validado;

  }

  async function cadastrar(){

    try {
      const dados = {
        cid_id,
        cid_cid,
        cid_descri
      }

      //API
      const response = await api.post('/cid', dados);
      console.log(response);
      if (response.data.confirma === true){

        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        alert("Cid cadastrado com sucesso!")
        navigate('/menu');

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
    <div>
      <Header pag={'CadCid'} />
      <div className='listarTitulo'>
        <h1>
          Cadastro de CID
        </h1>
      </div>

      <div className='divForm'>
          <form className='cadForm' onSubmit={handleSubmit}>

            <div>
              <label className="lblForm">
                Id do CID:
                <input
                className='inputFom'
                type="text" />
                {/* parei aqui */}
              </label>
            </div>

            <div className='divbtn'>
              <Link className='linkbtn' to='../menu'><button className='cancbtn' >Cancelar</button></Link>
              <button type="submit" className='cadbtn' >Cadastrar</button>
            </div>

          </form>

          </div>
      <Footer />
    </div>
  );
}

export default CadCid;

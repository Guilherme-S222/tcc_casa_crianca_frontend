import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import api from '../../services/api';

function CadEndereco() {

  let navigate = useNavigate();

  const [enderec_id, setenderec_id] = useState('');
  const [enderec_rua, setenderec_rua] = useState('');
  const [enderec_num, setenderec_num] = useState('');
  const [enderec_bairro, setenderec_bairro] = useState('');
  const [enderec_complem, setenderec_complem] = useState('');
  const [enderec_cidade, setenderec_cidade] = useState('');
  const [enderec_cep, setenderec_cep] = useState('');
  const [enderec_estado, setenderec_estado] = useState('');
  const [pct_pront_enderec, setpct_pront_enderec] = useState('');

  //validações
  const [Val_id, setVal_id] = useState('form-control');
  const [Err_id, setErr_id] = useState('');
  const [Val_rua, setVal_rua] = useState('form-control');
  const [Err_rua, setErr_rua] = useState('');
  const [Val_num, setVal_num] = useState('form-control');
  const [Err_num, setErr_num] = useState('');
  const [Val_bairro, setVal_bairro] = useState('form-control');
  const [Err_bairro, setErr_bairro] = useState('');
  const [Val_complem, setVal_complem] = useState('form-control');
  const [Err_complem, setErr_complem] = useState('');
  const [Val_cidade, setVal_cidade] = useState('form-control');
  const [Err_cidade, setErr_cidade] = useState('');
  const [Val_cep, setVal_cep] = useState('form-control');
  const [Err_cep, setErr_cep] = useState('');
  const [Val_estado, setVal_estado] = useState('form-control');
  const [Err_estado, setErr_estado] = useState('');
  const [Val_pct_pront, setVal_pct_pront] = useState('form-control');
  const [Err_pct_pront, setErr_pct_pront] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    if (valida()){
      cadastrar()
    }
  }

  //validações
  function valida(){
    let validado = true;

    if(enderec_id === ''){
      setVal_id('form-control error')
      setErr_id('Preencha o ID do endereço!')
      validado = false;
    } else {
      setVal_id('form-control success!')
    }

    if(enderec_rua === ''){
      setVal_rua('form-control error')
      setErr_rua('Preencha a rua!')
      validado = false;
    } else {
      setVal_rua('form-control success!')
    }

    if(enderec_num === ''){
      setVal_num('form-control error')
      setErr_num('Preencha o número do endereço!')
      validado = false;
    } else {
      setVal_num('form-control success!')
    }

    if(enderec_bairro === ''){
      setVal_bairro('form-control error')
      setErr_bairro('Preencha o bairro!')
      validado = false;
    } else {
      setVal_bairro('form-control success!')
    }

    if(enderec_cidade === ''){
      setVal_cidade('form-control error')
      setErr_cidade('Preencha a cidade!')
      validado = false;
    } else {
      setVal_cidade('form-control success!')
    }

    if(enderec_cep === ''){
      setVal_cep('form-control error')
      setErr_cep('Preencha o CEP do endereço!')
      validado = false;
    } else {
      setVal_cep('form-control success!')
    }

    if(enderec_estado === ''){
      setVal_estado('form-control error')
      setErr_estado('Preencha o Estado!')
      validado = false;
    } else {
      setVal_estado('form-control success!')
    }

    if(pct_pront_enderec === ''){
      setVal_pct_pront('form-control error')
      setErr_pct_pront('Preencha o prontuário do paciente vinculado a esse endereço!')
      validado = false;
    } else {
      setVal_pct_pront('form-control success!')
    }

    return validado;

  }

  async function cadastrar(){

    try {
      const dados = {
        enderec_id,
        enderec_rua,
        enderec_num,
        enderec_bairro,
        enderec_complem,
        enderec_cidade,
        enderec_cep,
        enderec_estado,
        pct_pront_enderec
      }

      //API
      const response = await api.post('/endereco', dados);
      console.log(response);
      if (response.data.confirma === true){

        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        alert("Endereço cadastrado com sucesso!")
        navigate('/menu');

      } else {
        alert('Error: ' + response.data.message)
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
      <Header pag={'CadEndereco'}/>
      <div className='listarTitulo'>
        <h1>
          Cadastro de Endereço
        </h1>
      </div>

      <div className='divForm'>

        <form className='cadForm' onSubmit={handleSubmit}>

          <div className={Val_id} id="Val_id">
            <label className='lblForm'>
              ID do endereço:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o ID do endereço"
                  onChange={v => setenderec_id(v.target.value)}
                  value={enderec_id}
                />
            </label>
            <small className='small' id='enderec_id'>{Err_id}</small>
          </div>

          <div className={Val_rua} id="Val_rua">
            <label className='lblForm'>
              Nome da rua:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite a rua"
                  onChange={v => setenderec_rua(v.target.value)}
                  value={enderec_rua}
                />
            </label>
            <small className='small' id='enderec_rua'>{Err_rua}</small>
          </div>

          <div className={Val_num} id="Val_num">
            <label className='lblForm'>
              Número:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o número"
                  onChange={v => setenderec_num(v.target.value)}
                  value={enderec_num}
                />
            </label>
            <small className='small' id='enderec_num'>{Err_num}</small>
          </div>

          <div className={Val_bairro} id="Val_bairro">
            <label className='lblForm'>
              Bairro:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o bairro"
                  onChange={v => setenderec_bairro(v.target.value)}
                  value={enderec_bairro}
                />
            </label>
            <small className='small' id='enderec_bairro'>{Err_bairro}</small>
          </div>

          <div className={Val_complem} id="Val_complem">
            <label className='lblForm'>
              Complemento:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o complemento"
                  onChange={v => setenderec_complem(v.target.value)}
                  value={enderec_complem}
                />
            </label>
            <small className='small' id='enderec_complem'>{Err_complem}</small>
          </div>

          <div className={Val_cidade} id="Val_cidade">
            <label className='lblForm'>
              Cidade:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite a cidade"
                  onChange={v => setenderec_cidade(v.target.value)}
                  value={enderec_cidade}
                />
            </label>
            <small className='small' id='enderec_cidade'>{Err_cidade}</small>
          </div>

          <div className={Val_cep} id="Val_cep">
            <label className='lblForm'>
              CEP:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o CEP"
                  onChange={v => setenderec_cep(v.target.value)}
                  value={enderec_cep}
                />
            </label>
            <small className='small' id='enderec_cep'>{Err_cep}</small>
          </div>

          <div className={Val_estado} id="Val_estado">
            <label className='lblForm'>
              Estado:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o Estado"
                  onChange={v => setenderec_estado(v.target.value)}
                  value={enderec_estado}
                />
            </label>
            <small className='small' id='enderec_estado'>{Err_estado}</small>
          </div>

          <div className={Val_pct_pront} id="Val_pct_pront">
            <label className='lblForm'>
              Prontuário do paciente vinculado:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente vinculado a esse endereço"
                  onChange={v => setpct_pront_enderec(v.target.value)}
                  value={pct_pront_enderec}
                />
            </label>
            <small className='small' id='pct_pront_enderec'>{Err_pct_pront}</small>
          </div>

          <div className='divbtn'>
            <Link className='linkbtn' to='../cadpacientes'><button className='cancbtn' >Cancelar</button></Link>
            <button type="submit" className='cadbtn'>Salvar</button>
          </div>

        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default CadEndereco;

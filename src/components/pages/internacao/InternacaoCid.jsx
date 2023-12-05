import api from '../../services/api';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';


function InternacaoCid(){

  const params = useParams();

  let navigate = useNavigate();

  const [intercid_id, setintercid_id] = useState('');
  const [intercid_evento, setintercid_evento] = useState('');
  const [intercid_status, setintercid_status] = useState('');
  const [intern_id_intercid, setintern_id_intercid] = useState('');
  const [cid_id_intercid, setcid_id_intercid] = useState('');
  
  //validações
  const [Val_id, setVal_id] = useState('form-control');
  const [Err_id, setErr_id] = useState('');
  const [Val_evento, setVal_evento] = useState('form-control');
  const [Err_evento, setErr_evento] = useState('');
  const [Val_status, setVal_status] = useState('form-control');
  const [Err_status, setErr_status] = useState('');
  const [Val_intern, setVal_intern] = useState('form-control');
  const [Err_intern, setErr_intern] = useState('');
  const [Val_cid, setVal_cid] = useState('form-control');
  const [Err_cid, setErr_cid] = useState('');

  //validações
  function valida(){
    let validado = true;

    // if (intercid_id === ''){
    //   setVal_id('form-control error');
    //   setErr_id('Preencha o id!')
    //   validado = false;
    // } else {
    //   setVal_id('form-control success!')
    // }

    if (intercid_evento === ''){
      setVal_evento('form-control error');
      setErr_evento('Preencha o evento!')
      validado = false;
    } else {
      setVal_evento('form-control success!')
    }

    if (intercid_status === ''){
      setVal_status('form-control error');
      setErr_status('Preencha o status!')
      validado = false;
    } else {
      setVal_status('form-control success!')
    }

    if (intern_id_intercid === ''){
      setVal_intern('form-control error');
      setErr_intern('Preencha a internação vinculada a esse CID!')
      validado = false;
    } else {
      setVal_intern('form-control success!')
    }

    if (cid_id_intercid === ''){
      setVal_cid('form-control error');
      setErr_cid('Preencha o id do CID que será cadastrado a essa internação!')
      validado = false;
    } else {
      setVal_cid('form-control success!')
    }

  return validado;

  }

  async function cadastrar(){

    try {
      const dados = {
        intern_id_intercid,
        cid_id_intercid,
        intercid_evento,
        intercid_status,
        intercid_id
      }

      if (params.id){
        await api.patch(`/internacao_cid/${params.id}`, dados);
        alert("Cid da Internação alterado com sucesso!");
        console.log(dados);
        navigate('/menu');

      } else{
        const response = await api.post('/internacao_cid', dados);
        console.log(response);
        if (response.data.confirma === true){

        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        alert('CID cadastrado na internação com sucesso!');
        navigate('/menu');

        } else {
        alert('Erro: ' + response.data.message)
        }
      }
    } catch (error){
        if (error.response){
          alert("Erro ao processar a requisição: " + error.response.data.message);
        } else {
          alert("Erro inesperado: " + error);
        }
      }
  }

  function handleSubmit(event){
    event.preventDefault();
    if (valida()){
      cadastrar()
    }
  }

  async function carregarCidIntern(){
    try {
      const response = await api.get(`/internacao_cid?intern_id_intercid=${params.id}`);

      console.log("Resposta: ", response);

      if (response.data.nItens === 1){

        const internCid = response.data.Itens[0];

        setintercid_id(internCid.intercid_id);
        setintercid_evento(internCid.intercid_evento);
        setintercid_status(internCid.intercid_status);
        setintern_id_intercid(internCid.intern_id_intercid);
        setcid_id_intercid(internCid.cid_id_intercid);
    
      } else {
        console.log("Nenhum item retornado na resposta da API");
      }
    } catch (error) {
        console.log("Erro ao carregar informações da internação:", error);
    }
  }

  useEffect(() => {
    if (params.id){
      carregarCidIntern();
    }
  }, []);

  return (
    <div>
      <Header pag={'InternacaoCid'}/>
        <div className='listarTitulo'>
          <h1>
              Cadastro de CID na Internação
          </h1>
        </div>

        <div className='divForm'>

          <form className='cadForm' onSubmit={handleSubmit}>

            {/* <div className={Val_id} id="Val_id">
              <label className='lblForm'>
                Id do cadastrado do CID:
                <input
                  className='inputForm'
                  type='text'
                  placeholder="Digite o ID do cadastro de CID"
                  onChange={v => setintercid_id(v.target.value)}
                  value={intercid_id}
                  readOnly
                />
              </label>
              <small className='small' id='intercid_id'>{Err_id}</small>
            </div> */}

            <div className={Val_intern} id="intern_id_intercid">
              <label className='lblForm'>
                Internação nº:
                <input
                  className='inputForm'
                  type='text'
                  placeholder="Digite o ID da internação"
                  onChange={v => setintern_id_intercid(v.target.value)}
                  value={intern_id_intercid}
                />
              </label>
              <small className='small' id='intern_id_intercid'>{Err_intern}</small>
            </div>

            <div className={Val_evento} id="Val_evento">
              <label className='lblForm'>
                Evento:
                <input
                    className='inputForm'
                    type='text'
                    placeholder="Digite o evento"
                    onChange={v => setintercid_evento(v.target.value)}
                    value={intercid_evento}
                />
              </label>
              <small className='small' id='intercid_evento'>{Err_evento}</small>
            </div>

            <div className={Val_status} id="Val_status">
              <label className='lblForm'>
                Status da internação:
                <select
                  className='inputForm'
                  onChange={v => setintercid_status(v.target.value)}
                >
                  <option value={-1} key={'-1'} >Escolha uma opção</option>
                  <option value={'Ativo'} key={'Ativo'}>Ativo</option>
                  <option value={'Inativo'} key={'Inativo'}>Inativo</option>
                </select>
              </label>
              <small className='small' id='intercid_status'>{Err_status}</small>
            </div>

            <div className={Val_cid} id="Val_cid">
              <label className='lblForm'>
                CID da internação:
                <select
                  className='inputForm'
                  onChange={v => setcid_id_intercid(v.target.value)}
                >
                  <option value={-1} key={'-1'} >Escolha um cid</option>
                  <option value={1} key={'1'}>R50 - Febre de origem desconhecida e de outras origens</option>
                  <option value={2} key={'2'}>R53 - Mal estar, fadiga</option>
                  <option value={3} key={'3'}>R11 - Náusea e vômitos</option>
                  <option value={4} key={'4'}>R10 - Dor abdominal e pélvica</option>
                  <option value={5} key={'5'}>R05 - Tosse</option>
                  <option value={6} key={'6'}>R06 - Anormalidades da respiração</option>
                  <option value={7} key={'7'}>R07 - Dor de garganta e no peito</option>
                  <option value={8} key={'8'}>R62 - Retardo do desenvolvimento fisiológico normal</option>
                  <option value={9} key={'9'}>R56 - Convulsões, não classificadas em outra parte</option>
                  <option value={10} key={'10'}>R51 - Cefaléia</option>
                </select>
              </label>
              <small className='small' id='cid_id_intercid'>{Err_cid}</small>
            </div>

            <div className='divbtn'>
              <Link className='linkbtn' to='../internacao'><button className='cancbtn'>Cancelar</button></Link>
              <button type="submit" className='cadbtn'>Cadastrar CID</button>
            </div>

          </form>

        </div>
      <Footer/>

    </div>
  );

}

export default InternacaoCid;

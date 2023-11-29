import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../header/header';
import Footer from '../../footer/footer';


function CadInternacao() {

  const params = useParams();

  let navigate = useNavigate();

  const [pct_pront, setpct_pront] = useState('');
  const [pct_nome, setpct_nome] = useState('');
  const [intern_id, setintern_id] = useState('');
  const [intern_data, setintern_data] = useState('');
  const [intern_dtsaida, setintern_dtsaida] = useState('');
  const [intern_tpsaida, setintern_tpsaida] = useState('');
  const [cid_cid, setcid_cid] = useState('');
  const [cid_descri, setcid_descri] = useState('');
  const [intercid_status, setintercid_status] = useState('');
  const [medic_nome, setmedic_nome] = useState('');
  const [user_nome, setuser_nome] = useState('');


  //validações
  const [Val_pct_pront, setVal_pct_pront] = useState('form-control');
  const [Err_pct_pront, setErr_pct_pront] = useState('');
  const [Val_pct_nome, setVal_pct_nome] = useState('form-control');
  const [Err_pct_nome, setErr_pct_nome] = useState('');
  const [Val_intern_id, setVal_intern_id] = useState('form-control');
  const [Err_intern_id, setErr_intern_id] = useState('');
  const [Val_intern_data, setVal_intern_data] = useState('form-control');
  const [Err_intern_data, setErr_intern_data] = useState('');
  const [Val_intern_dtsaida, setVal_intern_dtsaida] = useState('form-control');
  const [Err_intern_dtsaida, setErr_intern_dtsaida] = useState('');
  const [Val_intern_tpsaida, setVal_intern_tpsaida] = useState('form-control');
  const [Err_intern_tpsaida, setErr_intern_tpsaida] = useState('');
  const [Val_cid_cid, setVal_cid_cid] = useState('form-control');
  const [Err_cid_cid, setErr_cid_cid] = useState('');
  const [Val_cid_descri, setVal_cid_descri] = useState('form-control');
  const [Err_cid_descri, setErr_cid_descri] = useState('');
  const [Val_intercid_status, setVal_intercid_status] = useState('form-control');
  const [Err_intercid_status, setErr_intercid_status] = useState('');
  const [Val_medic_nome, setVal_medic_nome] = useState('form-control');
  const [Err_medic_nome, setErr_medic_nome] = useState('');
  const [Val_user_nome, setVal_user_nome] = useState('form-control');
  const [Err_user_nome, setErr_user_nome] = useState('');


  //validações
  function valida(){
    let validado = true;

    if (pct_pront === ''){
      setVal_pct_pront('form-control error');
      setErr_pct_pront('Erro no prontuário!')
      validado = false;
    } else {
      setVal_pct_pront('form-control success!')
    }
    if (pct_nome === ''){
      setVal_pct_nome('form-control error');
      setErr_pct_nome('Erro no nome!!')
      validado = false;
    } else {
      setVal_pct_nome('form-control success!')
    }
    if (intern_id === ''){
      setVal_intern_id('form-control error');
      setErr_intern_id('Erro no id!!')
      validado = false;
    } else {
      setVal_intern_id('form-control success!')
    }
    if (intern_data === ''){
      setVal_intern_data('form-control error');
      setErr_intern_data('Erro na data!')
      validado = false;
    } else {
      setVal_intern_data('form-control success!')
    }
    if (intern_dtsaida === ''){
      setVal_intern_dtsaida('form-control error');
      setErr_intern_dtsaida('Erro na data de saída!')
      validado = false;
    } else {
      setVal_intern_dtsaida('form-control success!')
    }
    if (intern_tpsaida === ''){
      setVal_intern_tpsaida('form-control error');
      setErr_intern_tpsaida('Erro no tipo de saída!')
      validado = false;
    } else {
      setVal_intern_tpsaida('form-control success!')
    }
    if (cid_cid === ''){
      setVal_cid_cid('form-control error');
      setErr_cid_cid('Erro no cid!')
      validado = false;
    } else {
      setVal_cid_cid('form-control success!')
    }
    if (cid_descri === ''){
      setVal_cid_descri('form-control error');
      setErr_cid_descri('Erro na descrição do cid!')
      validado = false;
    } else {
      setVal_cid_descri('form-control success!')
    }
    if (intercid_status === ''){
      setVal_intercid_status('form-control error');
      setErr_intercid_status('Erro no status do cid!')
      validado = false;
    } else {
      setVal_intercid_status('form-control success!')
    }
    if (medic_nome === ''){
      setVal_medic_nome('form-control error');
      setErr_medic_nome('Erro no nome do médico!')
      validado = false;
    } else {
      setVal_medic_nome('form-control success!')
    }
    if (user_nome === ''){
      setVal_user_nome('form-control error');
      setErr_user_nome('Erro no usuário!')
      validado = false;
    } else {
      setVal_user_nome('form-control success!')
    }


    return validado;

  }

  async function cadastrar(){

    try {
      // AJUSTAR O QUE SERÁ CADASTRADO!
      const dados = {
        // intern_id,
        // intern_data,
        // intern_dtsaida,
        // intern_tpsaida,
        // medic_id_intern,
        // user_id_intern,
        // pct_pront_intern
      }

      if (params.id){
        await api.patch(`/internacao/${params.id}`, dados);
        alert("Internação alterada com sucesso!");
        navigate('/menu');

      } else {
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

  async function carregarInfoInternacao() {
    try {
      const response = await api.get(`/internacao?intern_id=${params.id}`);

      if (response.data.nItens === 1) {
        const intern = response.data.Itens[0];

        setpct_pront(intern.pct_pront);
        setpct_nome(intern.pct_nome);
        setintern_id(intern.intern_id);
        setintern_data(converteData(intern.intern_data));
        setintern_dtsaida(converteData(intern.intern_dtsaida));
        setintern_tpsaida(intern.intern_tpsaida);
        setcid_cid(intern.cid_cid);
        setcid_descri(intern.cid_descri);
        setintercid_status(intern.intercid_status);
        setmedic_nome(intern.medic_nome);
        setuser_nome(intern.user_nome);

      } else {
        console.log("Nenhum item retornado na resposta da API");
      }
    } catch (error) {
        console.log("Erro ao carregar informações da internação:", error);
    }
  }

  useEffect(() => {
    if (params.id){
      carregarInfoInternacao();
    }
  }, []);

  // #### Função para conversão das datas
  function converteData(dtBd) {
    let data = new Date(dtBd);
    return data.getFullYear() + '-' + pad(data.getUTCMonth() + 1) + '-' + pad(data.getDate());
  }

  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
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

            <div className={Val_pct_pront} id="Val_pct_pront">
              <label className='lblForm'>
                Prontuário nº:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Prontuário"
                  onChange={v => setpct_pront(v.target.value)}
                  value={pct_pront}
                  readOnly
                />
              </label>
              <small className='small' id='pct_pront'>{Err_pct_pront}</small>
            </div>

            <div className={Val_pct_nome} id="Val_pct_nome">
              <label className='lblForm'>
                Nome do Paciente:
                <input
                  className='inputForm'
                  type='text'
                  onChange={v => setpct_nome(v.target.value)}
                  value={pct_nome}
                  readOnly
                />
              </label>
              <small className='small' id='intern_data'>{Err_pct_nome}</small>
            </div>

            <div className={Val_intern_id} id="Val_intern_id">
              <label className='lblForm'>
                Internação nº:
                <input
                  className='inputForm'
                  type='text'
                  onChange={v => setintern_id(v.target.value)}
                  value={intern_id}
                  readOnly
                />
              </label>
              <small className='small' id='intern_dtsaida'>{Err_intern_id}</small>
            </div>

            <div className={Val_intern_data} id="Val_intern_data">
              <label className='lblForm'>
                Data da Internação:
                <input
                  className='inputForm'
                  type='date'
                  placeholder= "Digite o tipo de saída: (alta médica ou transferência)"
                  onChange={v => setintern_data(v.target.value)}
                  value={intern_data}
                />
              </label>
              <small className='small' id='intern_tpsaida'>{Err_intern_data}</small>
            </div>

            <div className={Val_intern_dtsaida} id="Val_intern_dtsaida">
              <label className='lblForm'>
                Data da saída:
                <input
                  className='inputForm'
                  type='date'
                  placeholder= "Digite o ID do médico"
                  onChange={v => setintern_dtsaida(v.target.value)}
                  value={intern_dtsaida}
                  readOnly
                />
              </label>
              <small className='small' id='medic_id_intern'>{Err_intern_dtsaida}</small>
            </div>

            <div className={Val_intern_tpsaida} id="Val_intern_tpsaida">
              <label className='lblForm'>
                Tipo de saída:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o identificador do usuário"
                  onChange={v => setintern_tpsaida(v.target.value)}
                  value={intern_tpsaida}

                />
              </label>
              <small className='small' id='user_id_intern'>{Err_intern_tpsaida}</small>
            </div>

            <div className={Val_cid_cid} id="Val_cid_cid">
              <label className='lblForm'>
                Código do Cid:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente"
                  onChange={v => setcid_cid(v.target.value)}
                  value={cid_cid}
                  readOnly
                />
              </label>
              <small className='small' id='pct_pront_intern'>{Err_cid_cid}</small>
            </div>

            <div className={Val_cid_descri} id="Val_cid_descri">
              <label className='lblForm'>
                Descrição do Cid:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente"
                  onChange={v => setcid_descri(v.target.value)}
                  value={cid_descri}
                  readOnly
                />
              </label>
              <small className='small' id='pct_pront_intern'>{Err_cid_descri}</small>
            </div>

            <div className={Val_intercid_status} id="Val_intercid_status">
              <label className='lblForm'>
                Status do Cid:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente"
                  onChange={v => setintercid_status(v.target.value)}
                  value={intercid_status}
                  readOnly
                />
              </label>
              <small className='small' id='pct_pront_intern'>{Err_intercid_status}</small>
            </div>

            <div className={Val_medic_nome} id="Val_medic_nome">
              <label className='lblForm'>
                Médico:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente"
                  onChange={v => setmedic_nome(v.target.value)}
                  value={medic_nome}
                  readOnly
                />
              </label>
              <small className='small' id='pct_pront_intern'>{Err_medic_nome}</small>
            </div>

            <div className={Val_user_nome} id="Val_user_nome">
              <label className='lblForm'>
                Usuário:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário do paciente"
                  onChange={v => setuser_nome(v.target.value)}
                  value={user_nome}
                  readOnly
                />
              </label>
              <small className='small' id='pct_pront_intern'>{Err_user_nome}</small>
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

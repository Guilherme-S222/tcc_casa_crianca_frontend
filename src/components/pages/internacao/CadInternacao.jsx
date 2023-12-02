import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import Select from 'react-select';

import Header from '../../header/header';
import Footer from '../../footer/footer';


function CadInternacao() {

  const params = useParams();

  let navigate = useNavigate();

  const [intern_id, setintern_id] = useState('');
  const [intern_data, setintern_data] = useState('');
  const [intern_dtsaida, setintern_dtsaida] = useState('');
  const [intern_tpsaida, setintern_tpsaida] = useState('');
  const [medic_id_intern, setmedic_id_intern] = useState('-1');
  const [user_id_intern, setuser_id_intern] = useState('-1');
  const [pct_pront_intern, setpct_pront_intern] = useState('');
  //
  const [pct_pront, setpct_pront] = useState('');
  const [pct_nome, setpct_nome] = useState('');
  const [cid_cid, setcid_cid] = useState('');
  const [cid_descri, setcid_descri] = useState('');
  const [intercid_status, setintercid_status] = useState('');
  const [medic_nome, setmedic_nome] = useState('');
  const [user_nome, setuser_nome] = useState('');



  //validações
  const [Val_intern_id, setVal_intern_id] = useState('form-control');
  const [Err_intern_id, setErr_intern_id] = useState('');
  const [Val_intern_data, setVal_intern_data] = useState('form-control');
  const [Err_intern_data, setErr_intern_data] = useState('');
  const [Val_intern_dtsaida, setVal_intern_dtsaida] = useState('form-control');
  const [Err_intern_dtsaida, setErr_intern_dtsaida] = useState('');
  const [Val_intern_tpsaida, setVal_intern_tpsaida] = useState('form-control');
  const [Err_intern_tpsaida, setErr_intern_tpsaida] = useState('');
  const [Val_medic_id_intern, setVal_medic_id_intern] = useState('form-control');
  const [Err_medic_id_intern, setErr_medic_id_intern] = useState('');
  const [Val_user_id_intern, setVal_user_id_intern] = useState('form-control');
  const [Err_user_id_intern, setErr_user_id_intern] = useState('');
  const [Val_pct_pront_intern, setVal_pct_pront_intern] = useState('form-control');
  const [Err_pct_pront_intern, setErr_pct_pront_intern] = useState('');


  //validações
  function valida(){
    let validado = true;

    // if (intern_id === ''){
    //   setVal_intern_id('form-control error');
    //   setErr_intern_id('Erro no id!!')
    //   validado = false;
    // } else {
    //   setVal_intern_id('form-control success!')
    // }
    if (intern_data === ''){
      setVal_intern_data('form-control error');
      setErr_intern_data('Erro na data!')
      validado = false;
    } else {
      setVal_intern_data('form-control success!')
    }
    // if (intern_dtsaida === ''){
    //   setVal_intern_dtsaida('form-control error');
    //   setErr_intern_dtsaida('Erro na data de saída!')
    //   validado = false;
    // } else {
    //   setVal_intern_dtsaida('form-control success!')
    // }
    // if (intern_tpsaida === ''){
    //   setVal_intern_tpsaida('form-control error');
    //   setErr_intern_tpsaida('Erro no tipo de saída!')
    //   validado = false;
    // } else {
    //   setVal_intern_tpsaida('form-control success!')
    // }
    if (medic_id_intern === ''){
      setVal_medic_id_intern('form-control error');
      setErr_medic_id_intern('Erro no médico!')
      validado = false;
    } else {
      setVal_medic_id_intern('form-control success!')
    }
    if (user_id_intern === ''){
      setVal_user_id_intern('form-control error');
      setErr_user_id_intern('Erro no usuário!')
      validado = false;
    } else {
      setVal_user_id_intern('form-control success!')
    }
    if (pct_pront_intern === ''){
      setVal_pct_pront_intern('form-control error');
      setErr_pct_pront_intern('Erro na internação!')
      validado = false;
    } else {
      setVal_pct_pront_intern('form-control success!')
    }

    return validado;

  }

  async function cadastrar(){

    try {
      // AJUSTAR O QUE SERÁ CADASTRADO!
      const dados = {
        intern_id,
        intern_data,
        intern_dtsaida,
        intern_tpsaida,
        medic_id_intern,
        user_id_intern,
        pct_pront_intern
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

        setintern_id(intern.intern_id);
        setintern_data(converteData(intern.intern_data));
        setintern_dtsaida(converteData(intern.intern_dtsaida));
        setintern_tpsaida(intern.intern_tpsaida);
        setmedic_id_intern(intern.medic_id_intern);
        setuser_id_intern(intern.user_id_intern);
        setpct_pront_intern(intern.pct_pront_intern);
        //
        setpct_pront(intern.pct_pront);
        setpct_nome(intern.pct_nome);
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

/*
  const [medico, setMedico] = useState([]);
  const getMedicos = async () => {
    try {
      const response = await api.get("/medico");
      const data = response.data;
      console.log("Dados recebidos da API:", data);
      if (Array.isArray(data.Itens)) {
        // Certifique-se de que cada objeto tenha 'label' e 'value'
        const formattedData = data.Itens.map(item => ({ label: item.medic_nome, value: item.medic_id }));
        setMedico(formattedData);
      } else {
        console.error("Os dados recebidos não são um array válido");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMedicos();
  }, []);
*/

/*
  <div className={Val_medic_id_intern} id="Val_medic_id_intern">
    <label className='lblForm'>Médico:</label>
        {medico.length > 0 ? (
    <Select className='inputForm' options={medico} />
     ) : (
    <p>Carregando médicos...</p>
     )}
    <small className='small' id='medic_id_intern'>{Err_medic_id_intern}</small>
    </div>
*/

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

            <div className={Val_intern_id} id="Val_intern_id">
              <label className='lblForm'>
                Internação nº:
                <input
                  className='inputForm'
                  type='text'
                  placeholder='Preenchimento automático'
                  onChange={v => setintern_id(v.target.value)}
                  value={intern_id}
                  readOnly
                />
              </label>
              <small className='small' id='intern_id'>{Err_intern_id}</small>
            </div>

            <div className={Val_intern_data} id="Val_intern_data">
              <label className='lblForm'>
                Data da Internação:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setintern_data(v.target.value)}
                  value={intern_data}
                />
              </label>
              <small className='small' id='intern_data'>{Err_intern_data}</small>
            </div>

            <div className={Val_intern_dtsaida} id="Val_intern_dtsaida">
              <label className='lblForm'>
                Data da saída:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setintern_dtsaida(v.target.value)}
                  value={intern_dtsaida}
                />
              </label>
              <small className='small' id='intern_dtsaida'>{Err_intern_dtsaida}</small>
            </div>

            <div className={Val_intern_tpsaida} id="Val_intern_tpsaida">
              <label className='lblForm'>
                Tipo de saída:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o tipo de saída"
                  onChange={v => setintern_tpsaida(v.target.value)}
                  value={intern_tpsaida}
                />
              </label>
              <small className='small' id='intern_tpsaida'>{Err_intern_tpsaida}</small>
            </div>

            <div className={Val_medic_id_intern} id="Val_medic_id_intern">
              <label className='lblForm'>
                Médico:
                <select
                  className='inputForm'
                  onChange={v => setmedic_id_intern(v.target.value)}
                >
                  <option value={-1} key={'-1'} >Escolha um médico</option>
                  <option value={1} key={'1'}>Dr. Geraldo Cardoso</option>
                  <option value={2} key={'2'}>Dra. Carla Pereira</option>
                </select>
              </label>
              <small className='small' id='medic_id_intern'>{Err_medic_id_intern}</small>
            </div>

            <div className={Val_user_id_intern} id="Val_user_id_intern">
              <label className='lblForm'>
                Usuário:
                <select
                  className='inputForm'
                  onChange={v => setuser_id_intern(v.target.value)}
                >
                  <option value={-1} key={'-1'}>Escolha um usuário</option>
                  <option value={1} key={'1'}>admin</option>
                  <option value={2} key={'2'}>Anderson</option>
                </select>
              </label>
              <small className='small' id='user_id_intern'>{Err_user_id_intern}</small>
            </div>

            <div className={Val_pct_pront_intern} id="Val_pct_pront_intern">
              <label className='lblForm'>
                Paciente:
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

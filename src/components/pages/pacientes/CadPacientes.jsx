import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import '../pacientes/CadPacientes.css';

import api from '../../services/api';

function CadPacientes() {

  //informações que serão cadastradas
  let navigate = useNavigate();
  const [pct_pront, setpct_pront] = useState('');
  const [pct_cpf, setpct_cpf] = useState('');
  const [pct_nome, setpct_nome] = useState('');
  const [pct_sexo, setpct_sexo] = useState('');
  const [pct_sus, setpct_sus] = useState('');
  const [pct_cns, setpct_cns] = useState('');
  const [pct_dtnasc, setpct_dtnasc] = useState('');
  const [pct_aih, setpct_aih] = useState('');
  const [pct_bpc, setpct_bpc] = useState('');
  const [pct_aposent, setpct_aposent] = useState('');
  const [pct_filiacao, setpct_filiacao] = useState('');
  const [pct_natural, setpct_natural] = useState('');
  const [pct_cor, setpct_cor] = useState('');
  const [pct_rg, setpct_rg] = useState('');
  const [pct_dataexp, setpct_dataexp] = useState('');
  const [pct_orgemissor, setpct_orgemissor] = useState('');
  const [pct_dtcad, setpct_dtcad] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    cadastrar();
  }

  async function cadastrar(event){

    try {
      const dados = {
        pct_pront,
        pct_cpf,
        pct_nome,
        pct_sexo,
        pct_sus,
        pct_cns,
        pct_dtnasc,
        pct_aih,
        pct_bpc,
        pct_aposent,
        pct_filiacao,
        pct_natural,
        pct_cor,
        pct_rg,
        pct_dataexp,
        pct_orgemissor,
        pct_dtcad
      }

      // API
      const response = await api.post('#####', dados);

      if (response.data.confirma == true){
        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));

        navigate('/');

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
        <Header />
          <div className='listarTitulo'>
            <h1>
              Cadastro de Pacientes
            </h1>
          </div>
          <div className='divForm'>

            <form className='cadForm' onSubmit={handleSubmit}>

              <label className='lblForm'>
                Prontuário:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o prontuário"
                  onChange={v => setpct_pront(v.target.value)}
                  value={pct_pront}
                />
              </label>
              <label className='lblForm'>
                CPF:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o CPF"
                  onChange={v => setpct_cpf(v.target.value)}
                  value={pct_cpf}
                />
              </label>
              <label className='lblForm'>
                Nome do(a) Paciente:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o nome"
                  onChange={v => setpct_nome(v.target.value)}
                  value={pct_nome}
                />
              </label>
              <label className='lblForm'>
                Sexo:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o sexo"
                  onChange={v => setpct_sexo(v.target.value)}
                  value={pct_sexo}
                />
              </label>
              <label className='lblForm'>
                SUS:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o SUS"
                  onChange={v => setpct_sus(v.target.value)}
                  value={pct_sus}
                />
              </label>
              <label className='lblForm'>
                CNS:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o CNS"
                  onChange={v => setpct_cns(v.target.value)}
                  value={pct_cns}
                />
              </label>
              <label className='lblForm'>
                Data de Nascimento:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setpct_dtnasc(v.target.value)}
                  value={pct_dtnasc}
                />
              </label>
              <label className='lblForm'>
                AIH:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o AIH"
                  onChange={v => setpct_aih(v.target.value)}
                  value={pct_aih}
                />
              </label>
              <label className='lblForm'>
                BPC:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o BPC"
                  onChange={v => setpct_bpc(v.target.value)}
                  value={pct_bpc}
                />
              </label>
              <label className='lblFormAposent'>
                Aposentado:
                <input
                  className='inputcheckbox'
                  type='checkbox'
                  onChange={v => setpct_aposent(v.target.value)}
                  value={pct_aposent}
                />
                <br />
              </label>
              <label className='lblForm'>
                Filiação:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite a filiação"
                  onChange={v => setpct_filiacao(v.target.value)}
                  value={pct_filiacao}
                />
              </label>
              <label className='lblForm'>
                Naturalidade:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite a naturalidade"
                  onChange={v => setpct_natural(v.target.value)}
                  value={pct_natural}
                />
              </label>
              <label className='lblForm'>
                Cor:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite a cor"
                  onChange={v => setpct_cor(v.target.value)}
                  value={pct_cor}
                />
              </label>
              <label className='lblForm'>
                RG:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o RG"
                  onChange={v => setpct_rg(v.target.value)}
                  value={pct_rg}
                />
              </label>
              <label className='lblForm'>
                Data de Expedição:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setpct_dataexp(v.target.value)}
                  value={pct_dataexp}
                />
              </label>
              <label className='lblForm'>
                Orgão Emissor:
                <input
                  className='inputForm'
                  type='text'
                  placeholder= "Digite o orgão emissor"
                  onChange={v => setpct_orgemissor(v.target.value)}
                  value={pct_orgemissor}
                />
              </label>
              <label className='lblForm'>
                Data de Cadastro:
                <input
                  className='inputForm'
                  type='date'
                  onChange={v => setpct_dtcad(v.target.value)}
                  value={pct_dtcad}
                />
              </label>

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

export default CadPacientes;

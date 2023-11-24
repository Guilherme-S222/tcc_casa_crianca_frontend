import React, { useEffect, useState } from 'react'; //importando biblioteca React (definir componentes), e a função useState (hook que permite gerenciar componentes).
import { Link, useNavigate, useParams } from 'react-router-dom'; //importando componentes de navegação, Link (navegação entre paginas), useNavigate (navegação do react router).
// import { useSearchParams } from "react-router-native";
import api from '../../services/api'; //importando modulo api (configurações e interações com o servidor).

import Header from '../../header/header';
import Footer from '../../footer/footer';

import '../pacientes/CadPacientes.css';


function CadPacientes() {

  const params = useParams(); // Obtém o ID da URL

  let navigate = useNavigate();

  // #### Informações que serão cadastradas. Definindo variáveis de estado e uma função SET para atualiza-las. useState('') define a variável inicialmente vázia.
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
  const [pct_status, setpct_status] = useState('-1');
  const [pct_tel, setpct_tel] = useState('');
  // ####

  // #### Definindo variáveis de estado e uma função SET para atualiza-las. Serão usadas para validações.
  const [Val_pront, setVal_pront] = useState('form-control');
  const [Err_pront, setErr_pront] = useState('');
  const [Val_cpf, setVal_cpf] = useState('form-control');
  const [Err_cpf, setErr_cpf] = useState('');
  const [Val_nome, setVal_nome] = useState('form-control');
  const [Err_nome, setErr_nome] = useState('');
  const [Val_sexo, setVal_sexo] = useState('form-control');
  const [Err_sexo, setErr_sexo] = useState('');
  const [Val_sus, setVal_sus] = useState('form-control');
  const [Err_sus, setErr_sus] = useState('');
  const [Val_cns, setVal_cns] = useState('form-control');
  const [Err_cns, setErr_cns] = useState('');
  const [Val_dtnasc, setVal_dtnasc] = useState('form-control');
  const [Err_dtnasc, setErr_dtnasc] = useState('');
  const [Val_aih, setVal_aih] = useState('form-control');
  const [Err_aih, setErr_aih] = useState('');
  const [Val_bpc, setVal_bpc] = useState('form-control');
  const [Err_bpc, setErr_bpc] = useState('');
  const [Val_aposent, setVal_aposent] = useState('form-control');
  const [Err_aposent, setErr_aposent] = useState('');
  const [Val_filiacao, setVal_filiacao] = useState('form-control');
  const [Err_filiacao, setErr_filiacao] = useState('');
  const [Val_natural, setVal_natural] = useState('form-control');
  const [Err_natural, setErr_natural] = useState('');
  const [Val_cor, setVal_cor] = useState('form-control');
  const [Err_cor, setErr_cor] = useState('');
  const [Val_rg, setVal_rg] = useState('form-control');
  const [Err_rg, setErr_rg] = useState('');
  const [Val_dataexp, setVal_dataexp] = useState('form-control');
  const [Err_dataexp, setErr_dataexp] = useState('');
  const [Val_orgemissor, setVal_orgemissor] = useState('form-control');
  const [Err_orgemissor, setErr_orgemissor] = useState('');
  const [Val_dtcad, setVal_dtcad] = useState('form-control');
  const [Err_dtcad, setErr_dtcad] = useState('');
  const [Val_status, setVal_status] = useState('form-control');
  const [Err_status, setErr_status] = useState('');
  const [Val_tel, setVal_tel] = useState('form-control');
  const [Err_tel, setErr_tel] = useState('');
  // ####

  // #### VALIDAÇÕES DOS CAMPOS DO FORM
  function valida(){
    let validado = true; //iniciando como true.

    if (pct_pront === ''){
      setVal_pront('form-control error');
      setErr_pront("Preencha o prontuário do paciente!");
      validado = false;
    } else {
      setVal_pront('form-control success!');
    }

    if (pct_cpf === '' || pct_cpf.length !== 11){
      setVal_cpf('form-control error');
      setErr_cpf('O CPF deve conter 11 dígitos!!');
      validado = false;
    } else {
      setVal_cpf('form-control success!');
    }

    if (pct_nome === ''){
      setVal_nome('form-control error');
      setErr_nome('Preencha o nome do paciente!');
      validado = false;
    } else {
      setVal_nome('form-control success!');
    }

    if (pct_sexo === ''){
      setVal_sexo('form-control error');
      setErr_sexo('Preencha o sexo do paciente!');
      validado = false;
    } else {
      setVal_sexo('form-control success!');
    }

    if (pct_sus === ''){
      setVal_sus('form-control error');
      setErr_sus('Preencha o SUS do paciente!');
      validado = false;
    } else {
      setVal_sus('form-control success!');
    }

    if (pct_cns === ''){
      setVal_cns('form-control error');
      setErr_cns('Preencha o CNS do paciente!');
      validado = false;
    } else {
      setVal_cns('form-control success!');
    }

    if (pct_dtnasc === ''){
      setVal_dtnasc('form-control error');
      setErr_dtnasc('Preencha a data de nascimento do paciente!');
      validado = false;
    } else {
      setVal_dtnasc('form-control success!');
    }

    if (pct_aih === ''){
      setVal_aih('form-control error');
      setErr_aih('Preencha o AIH do paciente!');
      validado = false;
    } else {
      setVal_aih('form-control success!');
    }

    if (pct_bpc === ''){
      setVal_bpc('form-control error');
      setErr_bpc('Preencha o BPC do paciente!');
      validado = false;
    } else {
      setVal_bpc('form-control success!');
    }

    if (pct_aposent === ''){
      setVal_aposent('form-control error');
      setErr_aposent('Preencha se o paciente é aposentado (sim ou não)');
      validado = false;
    } else {
      setVal_aposent('form-control success!');
    }

    if (pct_filiacao === ''){
      setVal_filiacao('form-control error');
      setErr_filiacao('Preencha a filiação do paciente!');
      validado = false;
    } else {
      setVal_filiacao('form-control success!');
    }

    if (pct_natural === ''){
      setVal_natural('form-control error');
      setErr_natural('Preencha a naturalidade do paciente!');
      validado = false;
    } else {
      setVal_natural('form-control success!');
    }

    if (pct_cor === ''){
      setVal_cor('form-control error');
      setErr_cor('Preencha a cor do paciente!');
      validado = false;
    } else {
      setVal_cor('form-control success!');
    }

    if (pct_rg === '' || pct_rg.length > 9){
      setVal_rg('form-control error');
      setErr_rg('O RG não é válido!!');
      validado = false;
    } else {
      setVal_rg('form-control success!');
    }

    if (pct_dataexp === ''){
      setVal_dataexp('form-control error');
      setErr_dataexp('Preencha a data de expedição do RG!');
      validado = false;
    } else {
      setVal_dataexp('form-control success!');
    }

    if (pct_orgemissor === ''){
      setVal_orgemissor('form-control error');
      setErr_orgemissor('Preencha o orgão emissor do RG!');
      validado = false;
    } else {
      setVal_orgemissor('form-control success!');
    }

    if (pct_dtcad === ''){
      setVal_dtcad('form-control error');
      setErr_dtcad('Preencha a data do cadastro do paciente!');
      validado = false;
    } else {
      setVal_dtcad('form-control success!');
    }

    if (pct_status === -1){
      setVal_status('form-control error');
      setErr_status('Indique o status do paciente!');
      validado = 0;
    } else {
      setVal_status('form-control success!');
    }

    if (pct_tel === ''){
      setVal_tel('form-control error');
      setErr_tel('Indique o telefone o cadastro do paciente!');
      validado = false;
    } else {
      setVal_tel('form-control success!');
    }

    return validado; //retornando a variável que será true se passar na validações, ou false se falhar na validação.

  } // #### FIM VALIDAÇÕES


  // #### INÍCIO ENVIO DOS DADOS
  //função assíncrona responsável por enviar os dados para a API e realizar o cadastro, comunicação com o servidor, armazenamento das informações do usuário e redirecionamento do usuário com base nas ações.
  async function enviarDados(){

    try { //A instrução try marca o início de um bloco onde você tentará executar o código, e capturar quaisquer erros que possam ocorrer durante a execução.
      const dados = { //Objeto "dados" criado com os campos que serão extraídos das variáveis abaixo para serem enviados para o servidor(API).
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
        pct_dtcad,
        pct_status,
        pct_tel
      };

      if (params.id) {
        await api.patch(`/pacientes/${params.id}`, dados);
        alert("Cadastro do paciente alterado com sucesso!");
        navigate('/menu')


      } else {
        const response = await api.post('/pacientes', dados); //solicitação POST para a rota '/pacientes' usando a var API, enviando os dados para o servidor. A resposta do servidor é armazanada na var 'response'.
        console.log(response);

        if (response.data.confirma === true){ //verifica se a resposta contém uma prop 'confirma' igual a 'true', indicando que o paciente foi cadastrado.
          const objLogado = { //se o cadastro foi feito 'objLogado' armazena as informações id, nome e acesso.
            "id": response.data.id,
            "nome": response.data.nome,
            "acesso": response.data.tipo
          };

          localStorage.clear(); //limpa os dados anteriores no armazenamento local do navegador (localStorage).
          localStorage.setItem('user', JSON.stringify(objLogado));//armazena o objeto logado em formato JSON com a chave USER.

          const confirmacao = window.confirm("Internação cadastrada com sucesso! Deseja cadastrar o endereço desse paciente?");

          if (confirmacao){
            navigate('/cadendereco');
          } else {
            navigate('/menu');
          }

        } else {
          alert('Erro: ' + response.data.message); //Se a resposta do servidor não tiver a propriedade confirma definida como true, você exibe uma mensagem de erro ao usuário, incluindo a mensagem de erro retornada pelo servidor.
        }
      }
    } catch (error){
      console.log(error);
      //O bloco catch lida com erros que podem ocorrer durante a execução do código dentro do bloco try. Se ocorrer um erro, você verifica se ele tem uma resposta (error.response.data.message) para exibir a mensagem de erro do servidor. Caso contrário, você exibe o próprio erro.
      if (error.response){
        alert("Erro ao processar a requisição: " + error.response.data.message);
      } else {
        alert("Erro inesperado:" + error);
      }
    }
  } // #### FIM ENVIO DOS DADOS


  // #### A função handleSubmit é um manipulador de eventos em componentes React.
  function handleSubmit(event){
    event.preventDefault(); //o método preventDefault é usado para evitar que a página seja recarregada quando o form for enviado.
    if (valida()) { //se a função valida retornar TRUE os dados estão validados e prontos para cadastro.
      enviarDados();//envia os dados do formulário para o servidor(api)
    }
  }

  // #### INFORMAÇÕES RECEBIDAS DA CONSULTAS (PATCH)
  async function carregarInfoPacientes() {
    try {
      const response = await api.get(`/pacientes?pct_pront=${params.id}`);
      const paciente = response.data.itens[0];

      setpct_pront(paciente.pct_pront);
      setpct_cpf(paciente.pct_cpf);
      setpct_nome(paciente.pct_nome);
      setpct_sexo(paciente.pct_sexo);
      setpct_sus(paciente.pct_sus);
      setpct_cns(paciente.pct_cns);
      setpct_dtnasc(converteData(paciente.pct_dtnasc));
      setpct_aih(paciente.pct_aih);
      setpct_bpc(paciente.pct_bpc);
      setpct_aposent(paciente.pct_aposent);
      setpct_filiacao(paciente.pct_filiacao);
      setpct_natural(paciente.pct_natural);
      setpct_cor(paciente.pct_cor);
      setpct_rg(paciente.pct_rg);
      setpct_dataexp(converteData(paciente.pct_dataexp));
      setpct_orgemissor(paciente.pct_orgemissor);
      setpct_dtcad(converteData(paciente.pct_dtcad));
      setpct_status(paciente.pct_status);
      setpct_tel(paciente.pct_tel);

    } catch (error) {
      console.log("Erro ao carregar informações do paciente:", error);
    }
  };
  console.log(pct_status);
  // ####
  useEffect(() => {
    if (params.id) {
      carregarInfoPacientes();
    }
  }, []);

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
    <div>
        <Header pag={'CadPacientes'} />
          <div className='listarTitulo'>
            <h1>
              Cadastro de Pacientes
            </h1>
          </div>

          <div className='divForm'>

            <form className='cadForm' onSubmit={handleSubmit}>

              <div className={Val_pront} id="Val_pront" >
                <label className='lblForm'>
                  Prontuário:
                  <input
                    className='inputForm'
                    type='text'
                    placeholder= "Digite o prontuário"
                    onChange={v => setpct_pront(v.target.value)} //Define uma função a ser executada quando o valor do campo muda. Essa função atualiza a variável de estado pct_pront com o valor inserido no campo.
                    value={pct_pront} //Define o valor do campo como o valor da variável de estado pct_pront. Isso permite que o campo seja controlado pelo estado do componente.
                  />
                </label>
                <small className='small' id="pct_pront">{Err_pront}</small>
              </div>

              <div className={Val_cpf} id='Val_cpf'>
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
                <small className='small' id="pct_cpf">{Err_cpf}</small>
              </div>

              <div className={Val_nome} id='Val_nome'>
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
                <small className='small' id="pct_nome">{Err_nome}</small>
              </div>

              <div className={Val_sexo} id='Val_sexo'>
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
                <small className='small' id="pct_sexo">{Err_sexo}</small>
              </div>

              <div className={Val_sus} id='Val_sus'>
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
                <small className='small' id="pct_sus">{Err_sus}</small>
              </div>

              <div className={Val_cns} id='Val_cns'>
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
                <small className='small' id="pct_cns">{Err_cns}</small>
              </div>

              <div className={Val_dtnasc} id='Val_dtnasc'>
                <label className='lblForm'>
                  Data de Nascimento:
                  <input
                    className='inputForm'
                    type='date'
                    onChange={v => setpct_dtnasc(v.target.value)}
                    value={pct_dtnasc}
                  />
                </label>
                <small className='small' id="pct_dtnasc">{Err_dtnasc}</small>
              </div>

              <div className={Val_aih} id='Val_aih'>
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
                <small className='small' id="pct_aih">{Err_aih}</small>
              </div>

              <div className={Val_bpc} id='Val_bpc'>
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
                <small className='small' id="pct_bpc">{Err_bpc}</small>
              </div>

              <div className={Val_aposent} id='Val_aposent'>
                <label className='lblForm'>
                  Aposentado:
                  <input
                    className='inputForm'
                    type='text'
                    placeholder='É aposentado? Sim ou Não'
                    onChange={v => setpct_aposent(v.target.value)}
                    value={pct_aposent}
                  />
                  <br />
                </label>
                <small className='small' id="pct_aposent">{Err_aposent}</small>
              </div>

              <div className={Val_filiacao} id='Val_filiacao'>
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
                <small className='small' id="pct_filiacao">{Err_filiacao}</small>
              </div>

              <div className={Val_natural} id='Val_natural'>
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
                <small className='small' id="pct_natural">{Err_natural}</small>
              </div>

              <div className={Val_cor} id='Val_cor'>
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
                <small className='small' id="pct_cor">{Err_cor}</small>
              </div>

              <div className={Val_rg} id='Val_rg'>
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
                <small className='small' id="pct_rg">{Err_rg}</small>
              </div>

              <div className={Val_dataexp} id='Val_dataexp'>
                <label className='lblForm'>
                  Data de Expedição:
                  <input
                    className='inputForm'
                    type='date'
                    onChange={v => setpct_dataexp(v.target.value)}
                    value={pct_dataexp}
                  />
                </label>
                <small className='small' id="pct_dataexp">{Err_dataexp}</small>
              </div>

              <div className={Val_orgemissor} id='Val_orgemissor'>
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
                <small className='small' id="pct_orgemissor">{Err_orgemissor}</small>
              </div>

              <div className={Val_dtcad} id='Val_dtcad'>
                <label className='lblForm'>
                  Data de Cadastro:
                  <input
                    className='inputForm'
                    type='date'
                    onChange={v => setpct_dtcad(v.target.value)}
                    value={pct_dtcad}
                  />
                </label>
                <small className='small' id="pct_dtcad">{Err_dtcad}</small>
              </div>

              <div className={Val_status} id='Val_status'>
                <label className='lblForm'>
                  Status do Paciente:
                  <select
                    className='inputForm'
                    onChange={v => setpct_status(parseInt(v.target.value))}
                  >
                    <option value={-1} key={'-1'} disabled>Escolha uma opção</option>
                    <option value={1} key={'1'}>Ativo</option>
                    <option value={0} key={'2'}>Inativo</option>
                  </select>
                </label>
                <small className='small' id="pct_status">{Err_status}</small>
              </div>

              <div className={Val_tel} id='Val_tel'>
                <label className='lblForm'>
                  Telefone útil:
                  <input
                    className='inputForm'
                    type='text'
                    placeholder= "Digite um telefone no cadastro"
                    onChange={v => setpct_tel(v.target.value)}
                    value={pct_tel}
                  />
                </label>
                <small className='small' id="pct_tel">{Err_tel}</small>
              </div>

              <div className='divbtn'>
                <Link className='linkbtn' to='../menu'><button className='cancbtn' >Cancelar</button></Link>
                <button type="submit" className='cadbtn' >Salvar</button>
              </div>

            </form>

          </div>

        <Footer />
    </div>
  );
};

export default CadPacientes;

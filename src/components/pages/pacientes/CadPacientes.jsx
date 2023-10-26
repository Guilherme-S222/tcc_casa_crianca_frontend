import React, { useState } from 'react'; //Esta linha de código está importando o módulo React e a função useState de dentro do módulo react. O React é uma biblioteca amplamente usada para criar interfaces de usuário (UI) em JavaScript, e useState é um hook do React que permite adicionar estado a componentes funcionais.
import { Link, useNavigate } from 'react-router-dom'; //Aqui, o código está importando os módulos Link e useNavigate do módulo react-router-dom. O react-router-dom é uma biblioteca que permite criar roteamento em aplicativos React. O Link é usado para criar links de navegação entre páginas, e useNavigate é uma função que permite a navegação programática em seu aplicativo.

import Header from '../../header/header'; //Essa linha de código está importando o componente Header que é um componente que representa a parte superior de uma página da web, como um cabeçalho.
import Footer from '../../footer/footer'; //Essa linha de código está importando o componente Footer que é um componente que representa a parte inferior de uma página da web, como um rodapé.

import '../pacientes/CadPacientes.css'; //Esta linha está importando um arquivo CSS localizado no diretório.

import api from '../../services/api'; //Aqui, o código está importando um módulo api de um diretório. Esse módulo api provavelmente contém funções ou configurações relacionadas a chamadas de API, que podem ser usadas para fazer solicitações HTTP para um servidor.

function CadPacientes() {

  //informações que serão cadastradas

  let navigate = useNavigate(); //é uma função disponível no React Router que é usada para obter uma função de navegação. Essa função de navegação pode ser usada para realizar a transição entre diferentes rotas (páginas) em um aplicativo React que utiliza o React Router para o roteamento.

  //pct_pront é uma variável de estado que está sendo inicializada com um valor vazio, ''. Esta variável de estado é usada para armazenar um valor que pode ser modificado e rastreado dentro do componente.
  //setpct_pront é uma função que você pode usar para atualizar o valor da variável de estado pct_pront. Geralmente, ao chamar essa função com um novo valor como argumento, você atualiza o estado, o que pode acionar a re-renderização do componente com base no novo valor.
  //O uso típico disso é para rastrear informações em um componente React. Por exemplo, você pode usar pct_pront para rastrear o valor de um campo de entrada em um formulário e setpct_pront para atualizar esse valor quando o usuário interage com o campo de entrada.
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

  function handleSubmit(event){ // handler (manipulador) de eventos em um aplicativo React. A função handleSubmit é usada para lidar com o evento de envio do formulário.
    event.preventDefault(); // Esta linha de código é usada para evitar o comportamento padrão de envio de um formulário, que normalmente resultaria em uma recarga da página. O método preventDefault() é chamado no evento passado como argumento (provavelmente um evento de envio de formulário) para impedir que o navegador recarregue a página quando o formulário for enviado. Isso é útil quando você deseja controlar o comportamento de envio do formulário por meio de JavaScript.
    cadastrar(); // A função cadastrar() é chamada quando o evento de envio é tratado.
  }

  async function cadastrar(event){
    //Isso declara a função cadastrar. A função é declarada como async, o que significa que ela pode conter operações assíncronas, como chamadas de API, e pode usar a palavra-chave await para aguardar a conclusão dessas operações. Ela aceita um argumento event, que geralmente é um objeto de evento associado a um evento de formulário (por exemplo, um envio de formulário).

    try {
      //Nesta seção, um objeto dados é criado. Esse objeto contém uma série de campos que estão relacionados a informações do formulário.
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
      const response = await api.post('/pacientes', dados); //Nesta parte, uma chamada assíncrona de API é feita usando o objeto api. O código usa await para esperar a conclusão da chamada antes de continuar. A URL da API para a qual a solicitação é enviada é '#####' (que deve ser substituída pela URL real da API). Os dados do formulário (dados) são enviados no corpo da solicitação.

      if (response.data.confirma == true){
        //Aqui, o código verifica a resposta da API. Se a propriedade confirma no objeto de dados da resposta for true, o código dentro desse bloco será executado. Isso sugere que a API confirmou com sucesso o cadastro.

        const objLogado = {
          "id": response.data.id,
          "nome": response.data.nome,
          "acesso": response.data.tipo
        };

        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(objLogado));
        //Dentro do bloco de código acima, um objeto objLogado é criado com informações da resposta da API, como o id, nome e tipo. Essas informações são armazenadas localmente usando o localStorage. Isso permite que o usuário seja "logado" ou suas informações sejam armazenadas no navegador para uso futuro.

        navigate('/');
        //Se o cadastro for confirmado com sucesso pela API, o código usa a função navigate para redirecionar o usuário para a rota /. Isso provavelmente representa o redirecionamento para a página principal ou alguma outra ação após o login bem-sucedido.

      } else {
        alert('Erro: ' + response.data.message) // O bloco else trata o cenário em que a API não confirma o cadastro com confirma igual a true. Um alerta é exibido com a mensagem de erro da API ou uma mensagem de erro padrão.
      }
    } catch (error){ // O bloco catch trata exceções que podem ocorrer durante a chamada da API. Ele verifica se há um objeto de resposta de erro e exibe a mensagem de erro, ou exibe o erro em si se não houver uma resposta de erro específica.

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
                  onChange={v => setpct_pront(v.target.value)} /* O atributo onChange especifica uma função a ser executada sempre que o valor do campo de entrada for alterado. Quando o usuário digita algo no campo, a função anônima definida aqui é chamada. Essa função obtém o valor digitado (v.target.value) e o passa para a função setpct_pront. Presumivelmente, a função setpct_pront é usada para atualizar o estado do componente com o valor do campo de entrada. */
                  value={pct_pront} /* O atributo value está vinculado à variável de estado pct_pront. Isso significa que o valor exibido no campo de entrada é determinado pelo valor atual da variável pct_pront. Se a variável de estado for atualizada, o campo de entrada será re-renderizado com o novo valor. */
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

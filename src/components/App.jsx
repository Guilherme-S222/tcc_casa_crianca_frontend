import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Gerencia a navegação entre diferente páginas

//Importa os componentes que representam as diferentes páginas da aplicação. Cada componente está associado a uma rota específica.
import Home from './pages/home/Home';
import Pacientes from './pages/pacientes/Pacientes';
import CadPacientes from './pages/pacientes/CadPacientes';
import Endereco from './pages/endereço/Endereco';
import CadEndereco from './pages/endereço/CadEndereco';
import Cid from './pages/cid/Cid';
import CadCid from './pages/cid/CadCid';
import Internacao from './pages/internacao/Internacao';
import CadInternacao from './pages/internacao/CadInternacao';
import InternacaoCid from './pages/internacao/InternacaoCid';
import Medicos from './pages/medicos/Medicos';
import CadMedicos from './pages/medicos/CadMedicos';
import Prorrogacao from './pages/prorrogacao/Prorrogacao';
import CadProrrogacao from './pages/prorrogacao/CadProrrogacao';
import Transferencia from './pages/transferencia/Transferencia';
import CadTransferencia from './pages/transferencia/CadTransferencia';
import Usuarios from './pages/usuarios/Usuarios';
import CadUsuarios from './pages/usuarios/CadUsuarios';
import Login from './pages/usuarios/Login';
import Contato from './pages/home/Contato';
import Menu from './pages/menu/Menu';

//Define a função App, que retorna a estrutura da aplicação.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pacientes' element={<Pacientes/>} />
        <Route path='/cadpacientes/:id' element={<CadPacientes/>} />
        <Route path='/cadpacientes' element={<CadPacientes/>} />
        <Route path='/endereco' element={<Endereco/>} />
        <Route path='/cadendereco/:id' element={<CadEndereco/>} />
        <Route path='/cadendereco' element={<CadEndereco/>} />
        <Route path='/cid' element={<Cid/>} />
        <Route path='/cadcid' element={<CadCid/>} />
        <Route path='/internacao' element={<Internacao/>} />
        <Route path='/cadinternacao' element={<CadInternacao/>} />
        <Route path='/internacaocid' element={<InternacaoCid/>}/>
        <Route path='/medicos' element={<Medicos/>} />
        <Route path='/cadmedicos' element={<CadMedicos/>} />
        <Route path='/prorrogacao' element={<Prorrogacao/>} />
        <Route path='/cadprorrogacao' element={<CadProrrogacao/>} />
        <Route path='/transferencia' element={<Transferencia/>} />
        <Route path='/cadtransferencia' element={<CadTransferencia/>} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/cadusuarios' element={<CadUsuarios/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}
/*
Envolve a aplicação com o componente BrowserRouter, que fornece a funcionalidade de roteamento baseada no navegador.
Utiliza o componente Routes para agrupar as diferentes rotas da aplicação.

Define rotas usando o componente Route. Cada rota está associada a um caminho (path) e especifica o componente a ser renderizado (element) quando a rota correspondente for acessada.

Demonstra o uso de parâmetros na rota (:id). Isso permite que o componente CadPacientes acesse o valor do parâmetro id pela propriedade params do objeto de roteamento.

Em resumo, este arquivo configura o roteamento da aplicação React usando o React Router. Ele define as diferentes rotas associadas a componentes específicos, permitindo a navegação entre essas páginas. 
*/
export default App; //Exporta o componente App, tornando-o disponível para ser usado em outros lugares da aplicação.

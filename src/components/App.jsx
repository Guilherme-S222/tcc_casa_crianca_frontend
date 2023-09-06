import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Pacientes from './pages/pacientes/Pacientes';
import CadPacientes from './pages/pacientes/CadPacientes';
import Endereco from './pages/endereço/Endereco';
import CadEndereco from './pages/endereço/CadEndereco';
import Cid from './pages/cid/Cid';
import CadCid from './pages/cid/CadCid';
import Internacao from './pages/internacao/Internacao';
import CadInternacao from './pages/internacao/CadInternacao';
import Medicos from './pages/medicos/Medicos';
import CadMedicos from './pages/medicos/CadMedicos';
import Prorrogacao from './pages/prorrogacao/Prorrogacao';
import CadProrrogacao from './pages/prorrogacao/CadProrrogacao';
import Transferencia from './pages/transferencia/Transferencia';
import CadTransferencia from './pages/transferencia/CadTransferencia';
import Usuarios from './pages/usuarios/Usuarios';
import CadUsuarios from './pages/usuarios/CadUsuarios';
import Login from './pages/usuarios/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pacientes' element={<Pacientes/>} />
        <Route path='/cadpacientes' element={<CadPacientes/>} />
        <Route path='/endereco' element={<Endereco/>} />
        <Route path='/cadendereco' element={<CadEndereco/>} />
        <Route path='/cid' element={<Cid/>} />
        <Route path='/cadcid' element={<CadCid/>} />
        <Route path='/internacao' element={<Internacao/>} />
        <Route path='/cadinternacao' element={<CadInternacao/>} />
        <Route path='/medicos' element={<Medicos/>} />
        <Route path='/cadmedicos' element={<CadMedicos/>} />
        <Route path='/prorrogacao' element={<Prorrogacao/>} />
        <Route path='/cadprorrogacao' element={<CadProrrogacao/>} />
        <Route path='/transferencia' element={<Transferencia/>} />
        <Route path='/cadtransferencia' element={<CadTransferencia/>} />
        <Route path='/usuarios' element={<Usuarios/>} />
        <Route path='/cadusuarios' element={<CadUsuarios/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

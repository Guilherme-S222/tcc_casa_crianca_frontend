import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import { Link } from 'react-router-dom';


import '../pacientes/CadPacientes.css';

function CadPacientes() {
  return (
    <div>
        <Header />
          <div className='listarTitulo'>
            <h1>
              Cadastro de Pacientes
            </h1>
          </div>
          <div className='divForm'>
            <form className='cadForm'>

              <label className='lblForm'>
                Prontuário: 
                <input 
                className='inputForm' 
                type='text' 
                name="pct_pront"
                placeholder= "Digite o prontuário"
                />
              </label>
              <label className='lblForm'>
                Nome do Paciente: 
                <input 
                className='inputForm' 
                type='text' 
                name="pct_nome"
                placeholder= "Digite o nome do paciente"
                />
              </label>
              <label className='lblForm'>
                ... 
                <input 
                className='inputForm' 
                type='text' 
                name="pct_..."
                placeholder= "Digite o ...."
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

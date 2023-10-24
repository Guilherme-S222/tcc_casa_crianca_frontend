import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

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
                Prontuário: <input className='inputForm' name="pct_pront" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="pct_pront" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
              <label className='lblForm'>
                Prontuário: <input className='inputForm' name="" />
              </label>
            </form>
          </div>
        <Footer />
    </div>
  );
}

export default CadPacientes;

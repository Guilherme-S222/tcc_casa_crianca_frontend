import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function CadPacientes() {
  return (
    <div>
        <Header />
          <div className='listarTitulo'>
            <h1>
              Cadastro de Pacientes
            </h1>
          </div>
        <Footer />
    </div>
  );
}

export default CadPacientes;

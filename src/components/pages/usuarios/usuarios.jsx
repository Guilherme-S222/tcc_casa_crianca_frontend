import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";


function Usuarios() {

  const [usuarios, setUsuarios] = useState (
    [
      {
        "user_id": 1,
        "user_nome": "joao",
        "user_senha": "senha123",
        "insti_id_user": 1
      },
    ]
  );
  return (
    <div>
      <Header />
        <div className='listarTitulo'>
          <h1>
            Tela de Usuários
          </h1>
        </div>
      <Footer />
    </div>
  );
}

export default Usuarios;

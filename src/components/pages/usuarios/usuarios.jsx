import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

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
    <div >
      <Header pag={'Usuarios'}/>
        <p
          style={{
          margin: '10rem',
          textAlign: 'center',
          fontSize: '3rem'
        }}
        >
        Tela de Usuários
        </p>
      <Footer/>
    </div>
  );
}

export default Usuarios;

import api from '../../services/api';
import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

function Usuarios() {

  const [usuarios, setUsuarios] = useState ([])

  const getUsuarios = async() => {
    try {
      const response = await api.get("/usuario");
      const data = response.data;
      if (Array.isArray(data.Itens)){
        setUsuarios(data.Itens);
      } else {
        console.error("Os dados recebidos não são um array válido");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsuarios()
  }, []);

    const [busca, setBusca] = useState('');

    const usuarioFiltrado = useMemo(() => {
      const lowerBusca = busca.toLowerCase();
      return usuarios.filter((usuario) => usuario.user_nome.toLowerCase().startsWith(lowerBusca));
    }, [busca, usuarios]);

  return (
    <div>
      <Header pag={'Usuarios'} />

        <div className='listarTitulo'>
          <h1>
            Pesquisa de Usuários
          </h1>
        </div>

        <div className='botoesDiv'>
          <Link to='/cadusuarios'><button className='buttonCad' type="button">Cadastrar</button></Link>
          <Link to='/menu'><button className='buttonCad' type="button">Voltar</button></Link>
        </div>

        <div className='search'>
          <label className='labelSearch'>Nome do Usuário:</label>
          <input
          className='inputSearch'
          type='text'
          placeholder='Digite o nome do usuário aqui'
          value={busca}
          onChange={(event) => setBusca(event.target.value)} />
        </div>

        <div className='listarContainer'>
          {usuarioFiltrado.map(item => (
            <div className='listarDiv' key={item.user_id}>
              <span className='item'>Identificador: {item.user_id}</span>
              <span className='item'>Nome: {item.user_nome}</span>
              <span className='item'>Senha: {item.user_senha}</span>
              <span className='item'>Instituição: {item.insti_id_user}</span>
              {/* <button className='buttonEdt' type="button"><Link className='link' to='#'>Editar</Link></button> */}
            </div>
          ))}
        </div>

      <Footer />
    </div>
  );
}

export default Usuarios;

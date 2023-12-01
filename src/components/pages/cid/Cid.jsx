import api from '../../services/api';
import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

function Cid() {

  const [cid, setCid] = useState ([])

  const getCid = async() => {
    try {
      const response = await api.get("/cid");
      const data = response.data;
      if (Array.isArray(data.Itens)){
        setCid(data.Itens);
      } else {
        console.error("Os dados recebidos não são um array válido");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCid()
  }, []);

  const [busca, setBusca] = useState('');

  const cidFiltrado = useMemo (() => {
    const lowerBusca = busca.toLowerCase();
    return cid.filter((cids) => cids.cid_descri.toLowerCase().includes(lowerBusca));
  }, [busca, cid]);

  return (
    <div >
      <Header pag={'Cid'} />

      <div className='listarTitulo'>
        <h1>
          Pesquisar CID
        </h1>
      </div>

      <div className='botoesDiv'>
        <Link to='/cadcid'><button className='buttonCad' type="button">Cadastrar</button></Link>
        <Link to='/menu'><button className='buttonCad' type="button">Voltar</button></Link>
      </div>

      <div className='search'>
        <label className='labelSearch'>Descrição do CID:</label>
        <input
        className='inputSearch'
        type='text'
        placeholder='Digite a descrição do CID aqui'
        value={busca}
        onChange={(event) => setBusca(event.target.value)} />
      </div>

      <div className='listarContainer'>
        {cidFiltrado.map(item => (
          <div className='listarDiv' key={item.cid_id}>
            <span className='item'>ID: {item.cid_id}</span>
            <span className='item'>CID: {item.cid_cid}</span>
            <span className='item'>Descrição: {item.cid_descri}</span>
            {/* <button className='buttonEdt' type="button"><Link className='link' to='#'>Editar</Link></button> */}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cid;

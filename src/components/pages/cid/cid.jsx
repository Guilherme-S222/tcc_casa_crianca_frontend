import React, { useState, useMemo } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";

function Cid() {

  const [cid] = useState(
    [
      {
        "cid_id": 1,
        "cid_cid": "A01",
        "cid_descri": "Febre tifoide"
      },
      {
        "cid_id": 2,
        "cid_cid": "B20",
        "cid_descri": "Infecção pelo HIV"
      },
      {
        "cid_id": 3,
        "cid_cid": "C50",
        "cid_descri": "Tumor maligno da mama"
      },
      {
        "cid_id": 4,
        "cid_cid": "D64",
        "cid_descri": "Anemia por def. de ferro"
      },
      {
        "cid_id": 5,
        "cid_cid": "E11",
        "cid_descri": "Diabetes mellitus tipo 2"
      },
      {
        "cid_id": 6,
        "cid_cid": "F41",
        "cid_descri": "Transtornos de ansiedade"
      },
      {
        "cid_id": 7,
        "cid_cid": "G20",
        "cid_descri": "Doença de Parkinson"
      },
      {
        "cid_id": 8,
        "cid_cid": "I10",
        "cid_descri": "Hipertensão essencial"
      },
      {
        "cid_id": 9,
        "cid_cid": "J44",
        "cid_descri": "Doença pulmonar obst crônica"
      },
      {
        "cid_id": 10,
        "cid_cid": "K21",
        "cid_descri": "Doença do refluxo gastro"
      }
    ]
  );

  const [busca, setBusca] = useState('');

  const cidFiltrado = useMemo (() => {
    const lowerBusca = busca.toLowerCase();
    return cid.filter((cid) => cid.cid_descri.toLowerCase().includes(lowerBusca));
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
            <button className='buttonEdt' type="button"><Link className='link' to='#'>Editar</Link></button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cid;

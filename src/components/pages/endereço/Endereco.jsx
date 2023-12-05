import React, { useState, useMemo, useEffect } from 'react'; //adicionar hook useState
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";


function Endereco({ Endereco }) {

  const [endereco, setEndereco] = useState([]);

  const getEnderecos = async() => {
    try {
      const response = await api.get("/endereco");
      const data = response.data;
      if (data.itens){
        setEndereco(data.itens);
      } else {
        console.error("Os dados recebidos não são um array válido");
      }
    } catch (error) {
      console.error(error);
    };
  };

  useEffect(() => {
    getEnderecos();
  }, []);
    
  return (
    <div >
      <Header pag={'Endereco'}/>
      <h1 className='listarTitulo'>
        Listar Endereços
      </h1>
      <div className='botoesDiv'>
        <Link to='/cadendereco'><button className='buttonCad' type="button">Cadastrar</button></Link>
      </div>
      <div className='listarContainer'>
        {endereco.map(item => (
          <div className='listarDiv' key={item.enderec_id}>
            <span className='item'>Logradouro: {item.enderec_rua}</span>
            <span className='item'>Número: {item.enderec_num}</span>
            <span className='item'>Bairro: {item.enderec_bairro}</span>
            <span className='item'>Complemento: {item.enderec_complem}</span>
            <span className='item'>Cidade: {item.enderec_cidade}</span>
            <span className='item'>Cep: {item.enderec_cep}</span>
            <span className='item'>Estado: {item.enderec_estado}</span>
            <span className='item'>Prontuário do Paciente: {item.pct_pront_enderec}</span>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Endereco;

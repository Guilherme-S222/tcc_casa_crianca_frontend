import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

import { Link } from 'react-router-dom';


function CadInternacao() {
  return (
    <div >
      <Header pag={'CadIntercacao'}/>
        <div className='listarTitulo'>
          <h1>
            Cadastro de Internação
          </h1>
        </div>
        <div className='divForm'>
          <form className='cadForm'>
            <label className='lblForm'>
              Internação: 
              <input 
              className='inputForm' 
              type='text' 
              name="..."
              placeholder= "Digite a internação"
              />
            </label>
            <label className='lblForm'>
              Nome do ...: 
              <input 
                className='inputForm' 
                type='text' 
                name="..."
                placeholder= "Digite o nome do ..."
                />
              </label>
              <label className='lblForm'>
                ... 
                <input 
                className='inputForm' 
                type='text' 
                name="..."
                placeholder= "Digite o ...."
                />
              </label>

              <div className='divbtn'>
                <Link className='linkbtn' to='../menu'><button className='cancbtn' >Cancelar</button></Link>
                <button type="submit" className='cadbtn' >Cadastrar</button>
              </div>

            </form>

          </div>
      <Footer/>
    </div>
  );
}

export default CadInternacao;

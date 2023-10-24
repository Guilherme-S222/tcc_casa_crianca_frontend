import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Cid from "./Cid";
import { Link } from 'react-router-dom';


function CadCid() {
  return (
    <div>
      <Header />
      <div className='listarTitulo'>
        <h1>
          Cadastro de CID
        </h1>
      </div>
      <div className='divForm'>
          <form className='cadForm'>

            <label className='lblForm'>
              CID: 
              <input 
              className='inputForm' 
              type='text' 
              name="..."
              placeholder= "Digite o .."
              />
            </label>
            <label className='lblForm'>
              Nome do ..: 
              <input 
              className='inputForm' 
              type='text' 
              name="..."
              placeholder= "Digite o nome do .."
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
      <Footer />
    </div>
  );
}

export default CadCid;

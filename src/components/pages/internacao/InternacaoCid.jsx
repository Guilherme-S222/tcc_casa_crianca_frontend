import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../../header/header';
import Footer from '../../footer/footer';

import api from '../../services/api';

function InternacaoCid(){
    
    let navigate = useNavigate();

    const [intercid_id, setintercid_id] = useState('');
    const [intercid_evento, setintercid_evento] = useState('');
    const [intercid_status, setintercid_status] = useState('');
    const [intern_id_intercid, setintern_id_intercid] = useState('');
    const [cid_id_intercid, setcid_id_intercid] = useState('');

    //validações
    const [Val_id, setVal_id] = useState('form-control');
    const [Err_id, setErr_id] = useState('');
    const [Val_evento, setVal_evento] = useState('form-control');
    const [Err_evento, setErr_evento] = useState('');
    const [Val_status, setVal_status] = useState('form-control');
    const [Err_status, setErr_status] = useState('');
    const [Val_intern, setVal_intern] = useState('form-control');
    const [Err_intern, setErr_intern] = useState('');
    const [Val_cid, setVal_cid] = useState('form-control');
    const [Err_cid, setErr_cid] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        if (valida()){
            cadastrar()
        }
    }

    //validações
    function valida(){
        let validado = true;

        if (intercid_id === ''){
            setVal_id('form-control error');
            setErr_id('Preencha o id!')
            validado = false;
        } else {
            setVal_id('form-control success!')
        }

        if (intercid_evento === ''){
            setVal_evento('form-control error');
            setErr_evento('Preencha o evento!')
            validado = false;
        } else {
            setVal_evento('form-control success!')
        }

        if (intercid_status === ''){
            setVal_status('form-control error');
            setErr_status('Preencha o status!')
            validado = false;
        } else {
            setVal_status('form-control success!')
        }

        if (intern_id_intercid === ''){
            setVal_intern('form-control error');
            setErr_intern('Preencha a internação vinculada a esse CID!')
            validado = false;
        } else {
            setVal_intern('form-control success!')
        }

        if (cid_id_intercid === ''){
            setVal_cid('form-control error');
            setErr_cid('Preencha o id do CID que será cadastrado a essa internação!')
            validado = false;
        } else {
            setVal_cid('form-control success!')
        }

        return validado;

    }

    async function cadastrar(){

        try {
            const dados = {
                intercid_id,
                intercid_evento,
                intercid_status,
                intern_id_intercid,
                cid_id_intercid
            }

            //API
            const response = await api.post('/internacao_cid', dados);
            console.log(response);
            if (response.data.confirma === true){

                const objLogado = {
                    "id": response.data.id,
                    "nome": response.data.nome,
                    "acesso": response.data.tipo
                };

                localStorage.clear();
                localStorage.setItem('user', JSON.stringify(objLogado));

                alert('CID cadastrado na internação com sucesso!');
                navigate('/menu');

            } else {
                alert('Erro: ' + response.data.message)
            }
        } catch (error){
            if (error.response){
                alert(error.response.data.message);
            } else {
                alert(error);
            }
        }
    }

    return (
        <div>
            <Header pag={'InternacaoCid'}/>
                <div className='listarTitulo'>
                    <h1>
                        Cadastro de CID na Internação
                    </h1>
                </div>

                <div className='divForm'>

                    <form className='cadForm' onSubmit={handleSubmit}>

                        <div className={Val_id} id="Val_id">
                            <label className='lblForm'>
                                Id do cadastrado do CID:
                                <input 
                                    className='inputForm'
                                    type='text'
                                    placeholder="Digite o ID do cadastro de CID"
                                    onChange={v => setintercid_id(v.target.value)}
                                    value={intercid_id}
                                />
                            </label>
                            <small className='small' id='intercid_id'>{Err_id}</small>
                        </div>

                        <div className={Val_evento} id="Val_evento">
                            <label className='lblForm'>
                                Evento:
                                <input 
                                    className='inputForm'
                                    type='text'
                                    placeholder="Digite o evento"
                                    onChange={v => setintercid_evento(v.target.value)}
                                    value={intercid_evento}
                                />
                            </label>
                            <small className='small' id='intercid_evento'>{Err_evento}</small>
                        </div>

                        <div className={Val_status} id="Val_status">
                            <label className='lblForm'>
                                Status:
                                <input 
                                    className='inputForm'
                                    type='text'
                                    placeholder="Digite o status do CID"
                                    onChange={v => setintercid_status(v.target.value)}
                                    value={intercid_status}
                                />
                            </label>
                            <small className='small' id='intercid_status'>{Err_status}</small>
                        </div>

                        <div className={Val_intern} id="intern_id_intercid">
                            <label className='lblForm'>
                                ID da internação:
                                <input 
                                    className='inputForm'
                                    type='text'
                                    placeholder="Digite o ID da internação"
                                    onChange={v => setintern_id_intercid(v.target.value)}
                                    value={intern_id_intercid}
                                />
                            </label>
                            <small className='small' id='intern_id_intercid'>{Err_intern}</small>
                        </div>

                        <div className={Val_cid} id="Val_cid">
                            <label className='lblForm'>
                                ID do CID:
                                <input 
                                    className='inputForm'
                                    type='text'
                                    placeholder="Digite o ID do CID"
                                    onChange={v => setcid_id_intercid(v.target.value)}
                                    value={cid_id_intercid}
                                />
                            </label>
                            <small className='small' id='cid_id_intercid'>{Err_cid}</small>
                        </div>

                        <div className='divbtn'>
                            <Link className='linkbtn' to='../cadinternacao'><button className='cancbtn'>Cancelar</button></Link>
                            <button type="submit" className='cadbtn'>Cadastrar CID</button>
                        </div>

                    </form>

                </div>
            <Footer/>

        </div>
    );

}

export default InternacaoCid;
import React, { useState } from 'react'; //adicionar hook useState
import Header from '../../header/header';
import Footer from '../../footer/footer';

import "../listar_modelo/listar.css";


function Internação() {

  const [internacao, setInternacao] = useState (
    [
      {
        "intern_id": 1,
        "intern_data": "2023-08-01T11:00:00.000Z",
        "intern_dtsaida": null,
        "intern_tpsaida": null,
        "medic_crm_intern": "12345",
        "user_id_intern": 1,
        "pct_pront_intern": 1
      },
      {
        "intern_id": 2,
        "intern_data": "2023-08-01T11:30:00.000Z",
        "intern_dtsaida": null,
        "intern_tpsaida": null,
        "medic_crm_intern": "54321",
        "user_id_intern": 1,
        "pct_pront_intern": 2
      },
      {
        "intern_id": 3,
        "intern_data": "2023-08-03T12:15:00.000Z",
        "intern_dtsaida": null,
        "intern_tpsaida": null,
        "medic_crm_intern": "67890",
        "user_id_intern": 2,
        "pct_pront_intern": 3
      },
      {
        "intern_id": 4,
        "intern_data": "2023-08-05T12:00:00.000Z",
        "intern_dtsaida": null,
        "intern_tpsaida": null,
        "medic_crm_intern": "23456",
        "user_id_intern": 5,
        "pct_pront_intern": 4
      },
      {
        "intern_id": 5,
        "intern_data": "2023-08-08T18:00:00.000Z",
        "intern_dtsaida": null,
        "intern_tpsaida": null,
        "medic_crm_intern": "67890",
        "user_id_intern": 4,
        "pct_pront_intern": 5
      }
    ]
  );

  return (
    <div >
      <Header pag={'Internacao'}/>
      <h1 className='listarTitulo'>
        Listar Internações
      </h1>
      <div className='listarContainer'>
        {internacao.map(item => (
          <div className='listarDiv' key={item.intern_id}>
            <span className='item'>Data de internacão: {item.intern_data}</span>
            <span className='item'>Data de saída: {item.intern_dtsaida}</span>
            <span className='item'>Tipo de saída: {item.intern_tpsaida}</span>
            <span className='item'>Crm do Médico: {item.medic_crm_intern}</span>
            <span className='item'>Usuário: {item.user_id_intern}</span>
            <span className='item'>Prontuário do Paciente: {item.pct_pront_intern}</span>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Internação;

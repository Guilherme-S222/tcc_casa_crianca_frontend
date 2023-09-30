import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { FaHandsHoldingChild, FaChild, FaChildReaching, FaBriefcaseMedical, FaBookMedical, FaHandHoldingMedical } from "react-icons/fa6";

import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../../header/header';
import Footer from '../../footer/footer';
import CardProd from './cardProd';

import promo1 from '../../../images/promo1.png';
import promo2 from '../../../images/promo2.png';
import promo3 from '../../../images/promo3.png';
import promo4 from '../../../images/promo4.png';
import local from '../../../images/local.jpg';

import equo from '../../../images/temp/ecoterapia.jpg';
import hidro from '../../../images/temp/hidroterapia.jpg';
import cino from '../../../images/temp/cinoterapia.jpg';
import snoe from '../../../images/temp/snoezelen.jpg';


function Slider (){
  return (
    <Carousel
    className="slider"
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    infiniteLoop={true}
    interval={5000}
    >
      {/* CAROUSEL */}
      <div>
        <img src={promo1} alt="ecoterapia" />
      </div>
      <div>
        <img src={promo2} alt="hidroterapia" />
      </div>
      <div>
        <img src={promo3} alt="cinoterapia" />
      </div>
      <div>
        <img src={promo4} alt="snoezelen" />
      </div>
    </Carousel>
  )
}

function Home() {
  return (
    <div>
      <Header pag={'Home'}/>

        <Slider />

        {/* FOTO DO LOCAL  */}
        <main class="principal">
          <img className="imagemLocal" src={local} alt="Imagem do local"/>
          <p>A Casa da Criança é uma instituição filantrópica destinada aos cuidados de crianças e adolescentes com necessidades especiais. Está localizada à Rua João José Sabongi, 495 - Vila das Industrias na cidade de Tupã/SP. Com atendimento: 2.ª à 6.ª feira das 08:00 às 18:00 horas </p>
        </main>

        <div className="tipos">
          {/* TIPOS DE PRODUTOS  */}
          <FaChild className="icon" id="logo" />
          <FaBriefcaseMedical className="icon" id="logo" />
          <FaChildReaching className="icon" id="logo" />
          <FaHandHoldingMedical className="icon" id="logo" />
          <FaBookMedical className="icon" id="logo" />
        </div>

        {/* CARDS */}
        <div class="produtos">
          {/* Alguns produtos */}
          <CardProd
            produto={
              {
                img:equo,
                txtAltImg:'equoterapia',
                nome:'Equoterapia',
              }
            }
          />
          <CardProd
            produto={
              {
                img:hidro,
                txtAltImg:'hidroterapia',
                nome:'Hidroterapia',
              }
            }
          />
          <CardProd
            produto={
              {
                img:cino,
                txtAltImg:'cinoterapia',
                nome:'Cinoterapia',
              }
            }
          />
          <CardProd
            produto={
              {
                img:snoe,
                txtAltImg:'snoezelen',
                nome:'Snoezelen',
              }
            }
          />
        </div>
      <Footer/>
    </div>
  );
}

export default Home;

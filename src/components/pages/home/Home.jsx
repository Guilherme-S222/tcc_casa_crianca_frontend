import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import { FaHandsHoldingChild, FaChild, FaChildReaching, FaBriefcaseMedical, FaBookMedical, FaHandHoldingMedical } from "react-icons/fa6";

import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from '../../header/header';
import Footer from '../../footer/footer';

import promo1 from '../../../images/promo1.png';
import promo2 from '../../../images/promo2.png';
import promo3 from '../../../images/promo3.png';
import promo4 from '../../../images/promo4.png';
import local from '../../../images/local.jpg';

import eco from '../../../images/temp/ecoterapia.jpg';
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas! Hic quasi consequuntur quas numquam ullam fuga voluptas...
          </p>
        </main>

        <div class="tipos">
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
          <div class="cardProd">
            <div class="controlImg">
              <img src={eco} alt=""/>
            </div>
            <span class="descricao">Equoterapia</span>

          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={hidro} alt=""/>
            </div>
            <span class="descricao">Hidroterapia</span>

          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={cino} alt=""/>
            </div>
            <span class="descricao">Cinoterapia</span>
          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={snoe} alt=""/>
            </div>
            <span class="descricao">Snoezelen</span>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;

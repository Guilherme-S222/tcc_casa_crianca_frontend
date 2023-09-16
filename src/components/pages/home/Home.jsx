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

import prod1 from '../../../images/temp/fritas.jpg';
import prod2 from '../../../images/temp/hamburger-batata.jpg';
import prod3 from '../../../images/temp/lanche1.jpg';
import prod4 from '../../../images/temp/suco2.jpg';
import prod5 from '../../../images/temp/suco-laranja.jpg';
import prod6 from '../../../images/temp/sorvete.jpg';

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
      <div>
        <img src={promo1} alt="promoção 1" />
      </div>
      <div>
        <img src={promo2} alt="promoção 2" />
      </div>
      <div>
        <img src={promo3} alt="promoção 3" />
      </div>
      <div>
        <img src={promo4} alt="promoção 4" />
      </div>
    </Carousel>
  )
}

function Home() {
  return (
    <div>
      <Header pag={'Home'}/>

        <Slider />

        <main class="principal">
          {/* Info local  */}
          <img className="imagemLocal" src={local} alt="Imagem do local"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Hic quasi consequuntur quas numquam ullam fuga voluptas? Sunt, soluta beatae fugit ipsa eos quam ratione explicabo voluptates blanditiis, suscipit repellendus voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quasi consequuntur quas numquam ullam fuga voluptas! Hic quasi consequuntur quas numquam ullam fuga voluptas...
          </p>
        </main>

        <div class="tipos">
          {/* Tipos de produto  */}
          <FaChild className="icon" id="logo" />
          <FaBriefcaseMedical className="icon" id="logo" />
          <FaChildReaching className="icon" id="logo" />
          <FaHandHoldingMedical className="icon" id="logo" />
          <FaBookMedical className="icon" id="logo" />
        </div>

        <div class="produtos">
          {/* Alguns produtos */}
          <div class="cardProd">
            <div class="controlImg">
              <img src={prod1} alt=""/>
            </div>
            <span class="descricao">Lanche</span>
            
          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={prod2} alt=""/>
            </div>
            <span class="descricao">Lanche</span>
            
          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={prod3} alt=""/>
            </div>
            <span class="descricao">Lanche</span>
            
          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={prod4} alt=""/>
            </div>
            <span class="descricao">Lanche</span>
            
          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={prod5} alt=""/>
            </div>
            <span class="descricao">Lanche</span>
            
          </div>
          <div class="cardProd">
            <div class="controlImg">
              <img src={prod6} alt=""/>
            </div>
            <span class="descricao">Lanche</span>
            
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default Home;

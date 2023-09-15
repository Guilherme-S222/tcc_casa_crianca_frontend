import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Home() {
  return (
    <div >
      <Header pag={'Home'}/>
        <p
          style={{
            margin: '10rem',
            textAlign: 'center',
            fontSize: '3rem'
        }}
        >
        Home do Site
        </p>
      <Footer/>
    </div>
  );
}

export default Home;

import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

function Login() {
  return (
    <div >
      <Header pag={'Login'} />
        <p
          style={{
            margin: '10rem',
            textAlign: 'center',
            fontSize: '3rem'
          }}
        >
        Login
        </p>
      <Footer />
    </div>
  );
}

export default Login;

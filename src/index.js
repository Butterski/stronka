import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header/Header'
import TopButton from './components/TopButton/TopButton';
import Particles from './components/Particles/Particles';
import Footer from './components/Footer/Footer'

ReactDOM.render(
  <React.StrictMode>
    <Particles />
    <Header />
    <App />
    <Footer />
    <TopButton />
  </React.StrictMode>,
  document.getElementById('root')
);


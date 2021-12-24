import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header/Header'
import TopButton from './components/TopButton/TopButton';
import Particles from './components/Particles/Particles';

ReactDOM.render(
  <React.StrictMode>
    <Particles />
    <Header />
    <App />
    <TopButton />
  </React.StrictMode>,
  document.getElementById('root')
);


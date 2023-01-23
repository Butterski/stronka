import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Header from './components/Header/Header'
import TopButton from './components/TopButton/TopButton';
import Particles from './components/Particles/Particles';
import Footer from './components/Footer/Footer';
import NotFound from "./views/NotFound/NotFound";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
import Contact from "./views/Contact/Contact";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Particles />
    <Header />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/contact" element={<Contact />} />
      <Route
      path="*"
      element={<NotFound />}
    />
    </Routes>
    <Footer />
    <TopButton />
  </BrowserRouter>,
  document.getElementById('root')
);


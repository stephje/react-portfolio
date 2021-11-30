import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import React from 'react';

export default function App() {
  return (
      <React.Fragment>
        <Header/>
        <Navigation/>
        <Footer/>
      </React.Fragment>
  );
}

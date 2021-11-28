import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import React from 'react';

export default function App() {
  return (
      <React.Fragment>
        <Header/>
        <Navigation/>
        <Project/>
        <Footer/>
      </React.Fragment>
  );
}

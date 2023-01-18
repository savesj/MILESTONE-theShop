import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import {Routes, Route} from 'react-router';
import Login from './components/Login';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <Features/>
    <Pricing/>
    <About/>
    <Contact/>
    <Login/>
    <Footer/>
    </>
  );
}

export default App;

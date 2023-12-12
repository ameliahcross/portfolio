import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Habilidades from './components/Habilidades';
import MoreAbout from './components/MoreAbout';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { FaCircleArrowUp } from "react-icons/fa6";
import { useState, useEffect } from 'react';

function App() {

  const [showScroll, setShowScroll] = useState(false);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {showScroll && <FaCircleArrowUp className="arrow-icon" onClick={scrollUp} />}
      <div className='bg-shared'>
        <Navigation/>
        <About/>
      </div>
      <div className="more-about-container">
        <MoreAbout/>
        <Habilidades/>
        <Portafolio/>
        <Contacto/>
      </div>
    </div>
  );
}

export default App;

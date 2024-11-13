import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { FaCircleArrowUp } from "react-icons/fa6";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/homepage/Navigation';
import About from './components/homepage/About';
import Habilidades from './components/homepage/Habilidades';
import Contacto from './components/homepage/Contact'
import Work from './components/homepage/Work'

import Anxiologica from './components/projects/Anxiologica';
import DigitalAtm from './components/projects/DigitalAtm';
import ElectricalEngineer from './components/projects/ElectricalEngineer';
import EnPlan from './components/projects/EnPlan';
import Ferreteria from './components/projects/Ferreteria';
import Greendoor from './components/projects/Greendoor';
import HablamosElMarte from './components/projects/HablamoElMarte';
import Insumisas from './components/projects/Insumisas';
import IntoLettering from './components/projects/IntoLettering';
import ItlaTv from './components/projects/ItlaTv';
import LibreriaAHC from './components/projects/LibreriaAHC';
import Majavi from './components/projects/Majavi';
import OpticaFelix from './components/projects/OpticaFelix';
import PaginasAmarillas from './components/projects/PaginasAmarillas';
import PlazaDeLaCultura from './components/projects/PlazaDeLaCultura';
import Saleo from './components/projects/Saleo';
import SDNavigation from './components/projects/SDNavigation';
import VenAver from './components/projects/VenAver';
import VioletCharm from './components/projects/VioletCharm';
import Attorney from './components/projects/Attorney';
import Prikys from './components/projects/Prikys';

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
    <Router basename="/portfolio">
      <div>
        {showScroll && <FaCircleArrowUp className="arrow-icon" onClick={scrollUp} />}
        <Routes>
          {/* Ruta para la página principal */}
          <Route path="/" element={
            <>
             {/* <SDNavigation /> */}
              <div className='bg-shared'>
                <Navigation />
                <About />
              </div>
              <div className="more-about-container">
                <Work />
                <Habilidades />
                <Contacto />
              </div>
            </>
          } />
          
          {/* Ruta dinámica para cada proyecto */}
          <Route path="/projects/anxiologica" element={<Anxiologica />} />
          <Route path="/projects/digital-atm" element={<DigitalAtm />} />
          <Route path="/projects/electrical-engineer" element={<ElectricalEngineer />} />
          <Route path="/projects/en-plan" element={<EnPlan />} />
          <Route path="/projects/ferreteria" element={<Ferreteria />} />
          <Route path="/projects/greendoor" element={<Greendoor />} />
          <Route path="/projects/hablamos-el-marte" element={<HablamosElMarte />} />
          <Route path="/projects/insumisas" element={<Insumisas />} />
          <Route path="/projects/into-lettering" element={<IntoLettering />} />
          <Route path="/projects/itla-tv" element={<ItlaTv />} />
          <Route path="/projects/libreria-ahc" element={<LibreriaAHC />} />
          <Route path="/projects/attorney" element={<Attorney />} />
          <Route path="/projects/majavi" element={<Majavi />} />
          <Route path="/projects/optica-felix" element={<OpticaFelix />} />
          <Route path="/projects/paginas-amarillas" element={<PaginasAmarillas />} />
          <Route path="/projects/plaza-de-la-cultura" element={<PlazaDeLaCultura />} />
          <Route path="/projects/saleo" element={<Saleo />} />
          <Route path="/projects/sd-navigation" element={<SDNavigation showBackArrow={true}  />} />
          <Route path="/projects/ven-aver" element={<VenAver />} />
          <Route path="/projects/violet-charm" element={<VioletCharm />} />
          <Route path="/projects/prikys" element={<Prikys />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

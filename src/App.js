import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import bgImage from './images/keyboard.avif';


function App() {
  return (
    <div>
      <div style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh', 
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: -1,// contenedor detrás de los demás elementos
            }} >
      </div>
      <div className="container">
        <Navigation/>
        <About/>
      </div>
    </div>
    
  );
}

export default App;

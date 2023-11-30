import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import bgImage from './images/keyboard.avif';
import MoreAbout from './components/MoreAbout';


// function App() {
//   return (
//     <div className='bg-image'>
//       <div className="container">
//           <Navigation/>
//           <About/>
//           <MoreAbout/>
//       </div>
//     </div>
//   );
// }

function App() {
  const imgStyle = {
    maxWidth: '100%', // Establecer un tamaño máximo para la imagen
    height: 'auto', // Ajustar automáticamente la altura manteniendo la proporción
  };
  return (
    <div>
      <div className='bg-shared'>
        <Navigation/>
        <About/>
      </div>

      <div className="more-about-container">
        <MoreAbout/>
      </div>
    </div>
  );
}

export default App;

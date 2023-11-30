import 'bootstrap/dist/css/bootstrap.min.css';
import fotoAmelia from '../images/foto_amelia.JPG';
import { FaLinkedin } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { HiBriefcase } from "react-icons/hi";
import Buttons from './Buttons';
import '../styles/About.css'

// function About () {
//     return (
//         <section id="about" className="mar-max">
//             <div className="container d-md-flex justify-content-center">
//                 <div className="mar-right-30 mt-3">
//                     <img
//                         id="my-pic"
//                         src={fotoAmelia}
//                         className="d-block"
//                         alt="Foto Amelia"
//                         width="200"
//                         height="200"
//                     />
//                 </div>
//                 <div className="p-2">
//                     <div className='text-md-left text-center'>
//                         <h1>Amelia Henríquez Cross</h1>
//                         <p>UI/UX Designer & Developer | Branding</p>
//                         <div>
//                             <a href="https://www.linkedin.com/in/ameliahcross" target='_blank'>
//                                 <FaLinkedin className="icono-grande"/>
//                             </a>
//                         </div>
//                     </div>
                   
//                     <div className='btn-container d-flex flex-column flex-md-row'>
//                        <Buttons
//                         icon={<FaGraduationCap className='icono-grande'
//                                 style={{fill:'black', margin: '0 6px 3px 0'}} />}
//                         parentClassName="buttons mt-3"
//                         childClassName="btn btn-light me-md-3 mt-2"
//                         href='#education'
//                         nombre='Sobre mi'
//                      />
//                       <Buttons
//                         icon={<HiBriefcase className='icono-grande'
//                                 style={{fill:'black', margin: '0 6px 3px 0'}}/>}
//                         parentClassName="buttons mt-3"
//                         childClassName="btn btn-info mt-2"
//                         href='#education'
//                         nombre='Portafolio'
//                      /> 
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

function About() {
    return (
      <section id="about" className="mar-max">
        <div className="container">
          <div className="row">
            {/* Imagen */}
            <div id='img-container' className="col-12 col-lg-4 col-md-12 col-sm-12 text-center mb-4 mb-md-0">
              <img
                id="my-pic"
                src={fotoAmelia}
                className="d-block mx-auto"
                alt="Foto Amelia"
                width="200"
                height="200"
              />
            </div>
  
            {/* Texto y botones */}
            <div id='text-container' className="col-12 col-lg-8 col-md-12 ">
              <div className="text-lg-start text-center mt-2">
                <h1>Amelia Henríquez Cross</h1>
                <p>UI/UX Designer & Developer | Branding</p>
                <div id='buttons-container' className='btn-container d-flex flex-column flex-md-row flex-md-row flex-sm-column flex-lg-row col-lg-4 col-md-6 col-sm-12'>
                  <Buttons
                    icon={<FaGraduationCap className='icono-grande'
                            style={{fill:'black', margin: '0 6px 3px 0'}} />}
                    parentClassName="buttons mt-3 me-md-3 col-md-12"
                    childClassName="btn btn-light mt-2"
                    href='#education'
                    nombre='Sobre mi'
                  />
                  <Buttons
                    icon={<HiBriefcase className='icono-grande'
                            style={{fill:'black', margin: '0 6px 3px 0'}}/>}
                    parentClassName="buttons mt-3 col-md-12"
                    childClassName="btn btn-info mt-2"
                    href='#education'
                    nombre='Portafolio'
                  /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default About;
import 'bootstrap/dist/css/bootstrap.min.css';
import fotoAmelia from '../images/foto_amelia.JPG';
import { FaLinkedin } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { HiBriefcase } from "react-icons/hi";
import Buttons from './Buttons';
import '../styles/About.css'

function About () {
    return (
        <section id="about" className="mar-top-30">
            <div className="d-flex">
                <div className="mar-right-30 mt-3">
                    <img
                        id="my-pic"
                        src={fotoAmelia}
                        className="d-block"
                        alt="Foto Amelia"
                        width="150"
                        height="150"
                    />
                </div>
                <div className="p-2">
                    <h1>Amelia Henríquez Cross</h1>
                    <p>UI/UX Designer & Developer | Branding</p>
                    <div>
                        <FaLinkedin />
                    </div>
                    <div className='btn-container'>
                       <Buttons
                        icon={<FaGraduationCap 
                                style={{fill:'black', margin: '0 6px 3px 0'}} />}
                        parentClassName="buttons mt-3"
                        childClassName="btn btn-light me-3 mt-2"
                        href='#education'
                        nombre='Sobre Mi'
                     />
                      <Buttons
                        icon={<HiBriefcase
                                style={{fill:'black', margin: '0 6px 3px 0'}}/>}
                        parentClassName="buttons mt-3"
                        childClassName="btn btn-info mt-2"
                        href='#education'
                        nombre='Portafolio'
                     /> 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
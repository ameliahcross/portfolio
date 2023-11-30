import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import Buttons from "./Buttons";
import EducationCards from "./EducationCards";
import logoUnibe from '../images/logoUnibe.png';
import logoItla from '../images/logoItla.webp';
import logoSQD from '../images/logoSDQ.jpeg';
import logoUdemy from '../images/logoUdemy.png';

function MoreAbout() {
  return (
    <section id="more-about">
      <div className="container">
        <div className="items-center text-center">
          <div className="row">
            <p className="title mt-4">Sobre mi</p>
            <p>
              Graduada de Comunicación Publicitaria en la Universidad
              Iberoaméricana de Santo Domingo. Actualmente cursando la carrera
              de Desarrollo de Software en el Instituto Tecnológico de Las
              Américas. Desde los inicios de mi primera carrera me incliné hacia
              el área del diseño gráfico, concentrando mis labores en el
              branding y creación de contenido multimedia. <br />
              <br />
              Actualmente me enfoco en el diseño de interfaces y experiencia de
              usuario (UI/UX) así como en el desarrollo front-end.
            </p>
          </div>
          <div className="row">
            <p className="title mt-4">Académico</p>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <EducationCards/>
            </div>
          </div>
        </div>
        <div className="">
          <img className="" alt="hero" src="./coding.svg" />
        </div>
      </div>
    </section>
  );
}

export default MoreAbout;

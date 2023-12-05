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
      <div className="container mb-more">
        <div className="items-center text-center">
          <div className="row">
            <p className="brackets mt-4"> 
                &#123;
                <span className="title">Sobre mi</span> 
                &#125;
            </p>
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
            <p className="brackets mt-4">
                &#123;
                <span className="title">Académico</span> 
                &#125;
            </p>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xs-3 g-4 mt-2">
                <EducationCards
                    image={logoItla}
                    imageAlt="logo-itla"
                    title="Tecnólogo en Desarrollo de Software"
                    text="Instituto Tecnológico de las Américas"
                />
                <EducationCards
                    image={logoUnibe}
                    imageAlt="logo-unibe"
                    title="Licenciatura en Comunicación Publicitaria"
                    text="Universidad Iberoamericana"
                />
                <EducationCards
                    image={logoSQD}
                    imageAlt="logo-sdq"
                    title="Curso de Introducción a la Programación"
                    text="SDQ Training Center"
                />
                <EducationCards
                    image={logoSQD}
                    imageAlt="logo-sdq"
                    title="Curso de Diseño de sitios Web con HML5 & CSS3"
                    text="SDQ Training Center"
                />
                 <EducationCards
                    image={logoUdemy}
                    imageAlt="logo-udemy"
                    title="Curso Universidad CSS 2021"
                    text="UDEMY"
                />
                <EducationCards
                    image={logoItla}
                    imageAlt="logo-itla"
                    title="Diplomado en Programación Web con Javascript"
                    text="Instituto Tecnológico de las Américas"
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default MoreAbout;

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/MoreAbout.css";
import EducationCards from "./EducationCards";
import logoUnibe from '../images/logoUnibe.png';
import logoItla from '../images/itlalogo.webp';
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
                <span className="title-b">About me</span> 
                &#125;
            </p>
            <p>
              Graduated in Advertising Communications from Universidad Iberoamericana de Santo Domingo.
              
              Now pursuing a technical degree in Software Development at Instituto Tecnológico de Las Américas (ITLA).
              My current focus lies on web developement and UI/UX design.
            </p>
          </div>
            <p className="brackets mt-4">
                &#123;
                <span className="title-b">Education</span> 
                &#125;
            </p>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xs-3 g-4 mt-2">
                <EducationCards
                    image={logoItla}
                    imageAlt="logo-itla"
                    title="Software Development Technical Degree "
                    text="Instituto Tecnológico de las Américas"
                    span="In progress"
                />
                <EducationCards
                    image={logoUnibe}
                    imageAlt="logo-unibe"
                    title="Bachelor's Degree in Advertising Communication"
                    text="Universidad Iberoamericana"
                />
                <EducationCards
                    image={logoSQD}
                    imageAlt="logo-sdq"
                    title="Introduction to Programming"
                    text="SDQ Training Center"
                />
                <EducationCards
                    image={logoSQD}
                    imageAlt="logo-sdq"
                    title="HML5 & CSS3 Web Design Course"
                    text="SDQ Training Center"
                />
                 <EducationCards
                    image={logoUdemy}
                    imageAlt="logo-udemy"
                    title="CSS University Course 2021"
                    text="UDEMY"
                />
                <EducationCards
                    image={logoItla}
                    imageAlt="logo-itla"
                    title="Web Programming with Javascript"
                    text="Instituto Tecnológico de las Américas"
                />
            </div>
        </div>
      </div>
    </section>
  );
}

export default MoreAbout;

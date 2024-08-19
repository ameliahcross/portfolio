import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/MoreAbout.css";
import "../../App.css";
import EducationCards from "./EducationCards";
import WorkCard from "./WorkCard";
import logoUnibe from '../../images/logoUnibe.png';
import logoItla from '../../images/itlalogo.webp';
import logoSQD from '../../images/logoSDQ.jpeg';
import logoUdemy from '../../images/logoUdemy.png';
import googleCertificates from '../../images/google_cert_logo.png';
import logoEximedia from '../../images/eximedia_logo.png';

function MoreAbout() {
  return (
    <section id="more-about">
      <div className="container mb-more">
        <div className="items-center text-center">
          <div className="row"></div>
            <h3 className="mt-5">
                <span className="title-b">Education</span> 
            </h3>
            {/* <div className="row row-cols-1 row-cols-md-3 row-cols-xs-3 g-4 mt-2">
                <EducationCards
                    image={googleCertificates}
                    imageAlt="logo-google-certificates"
                    title="Google UX Design Certificate"
                    text="Google Career Certificates"
                    span="In progress" 
                />
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
                <EducationCards
                    image={logoEximedia}
                    imageAlt="logo-eximedia"
                    title="Graphic Design Course"
                    text="EXIMEDIA"
                    imgStyle={{ marginTop: '40px' }} 
                />
            </div> */}
        </div>
      </div>
    </section>
  );
}

export default MoreAbout;

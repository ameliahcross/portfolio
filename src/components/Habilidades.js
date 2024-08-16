import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "../styles/Habilidades.css";
import { ProgressBar } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { DiJqueryLogo, DiDotnet } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
import { SiAdobexd, SiAdobeillustrator,  SiAdobephotoshop} from "react-icons/si";

function Habilidades() {
  return (
    <section id="habilidades">
      <div className="container py-4 pb-4">
        <h3 className="mt-4">Skills </h3>
        <h6 className="mt-5 text-center">Design </h6>
        <div id="skills" className="row mt-2">
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <SiAdobexd size={30} className="m-1 mar-right-4" />
            Adobe XD
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <IoLogoFigma size={30} className="m-1 mar-right-4" />
            Figma
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <SiAdobeillustrator size={30} className="m-1" />
            Adobe Illustrator
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <SiAdobephotoshop size={30} className="m-1" />
            Adobe Photoshop
          </div>
          <h6 className="mt-5 text-center"> Software </h6>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <FaHtml5 size={30} className="m-1" />
            HTML
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <FaCss3Alt size={30} className="m-1" />
            CSS
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <IoLogoJavascript size={30} className="m-1" />
            JavaScript
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <DiJqueryLogo size={30} className="m-1" />
            jQuery
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <FaReact size={30} className="m-1" />
            React JS
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <FaGitAlt size={30} className="m-1" />
            Git
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <PiFileSqlFill size={30} className="m-1" />
            SQL
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <SiCsharp size={30} className="m-1" />
            C#
          </div>
          <div className="col-6 col-sm-4 col-lg-3 mt-4">
            <DiDotnet size={30} className="m-1" />
            ASP.NET Core
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;

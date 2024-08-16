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
        <div className="row skill-info mt-5">
          <div className="col-sm-6 col-lg-3 mt-2">
            <SiAdobexd size={30} className="m-1 mar-right-4" />
            Adobe XD
            <ProgressBar animated now={100} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <IoLogoFigma size={30} className="m-1 mar-right-4" />
            Figma
            <ProgressBar animated now={90} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <SiAdobeillustrator size={30} className="m-1" />
            Adobe Illustrator
            <ProgressBar animated now={90} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <SiAdobephotoshop size={30} className="m-1" />
            Adobe Photoshop
            <ProgressBar animated now={80} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <FaHtml5 size={30} className="m-1" />
            HTML
            <ProgressBar animated now={95} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <FaCss3Alt size={30} className="m-1" />
            CSS
            <ProgressBar animated now={80} className="mt-2" />
          </div>
          {/* <div className="col-sm-6 col-lg-3 mt-2">
            <IoLogoJavascript size={30} className="m-1" />
            JavaScript
            <ProgressBar animated now={70} className="mt-2" />
          </div> */}
          <div className="col-sm-6 col-lg-3 mt-2">
            <DiJqueryLogo size={30} className="m-1" />
            jQuery
            <ProgressBar animated now={70} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <FaReact size={30} className="m-1" />
            React JS
            <ProgressBar animated now={50} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <FaGitAlt size={30} className="m-1" />
            Git
            <ProgressBar animated now={90} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <PiFileSqlFill size={30} className="m-1" />
            SQL
            <ProgressBar animated now={70} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <SiCsharp size={30} className="m-1" />
            C#
            <ProgressBar animated now={70} className="mt-2" />
          </div>
          <div className="col-sm-6 col-lg-3 mt-2">
            <DiDotnet size={30} className="m-1" />
            ASP.NET Core (MVC)
            <ProgressBar animated now={80} className="mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;

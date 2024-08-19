import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Contact.css";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Contact() {
  return (
    <section id="contacto">
      <div className="container py-4 p-4">
        <h3 className="footer">Contact me</h3>
        <div className="row">
            <div className="mt-2 contact-icons">
                <a href="mailto:ameliahcross@gmail.com"><MdEmail size={20} fill="white" className="m-4"/></a>
                <a href="https://t.me/ameliahcross"><MdOutlinePhoneIphone size={20} fill="white" className="m-4" /></a>
                <a href="https://github.com/ameliahcross"><FaGithub size={20} fill="white" className="m-4" /></a>
                <a href="www.linkedin.com/in/ameliahcross"><FaLinkedin size={20} fill="white" className="m-4" /></a>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 mt-2 text-center mt-4">
              <span>Built with <FaHeart/> & React <FaReact size={20} className='react-icon'/></span>
            </div>
        </div>
        <div className="row">
            <div className="col-12 mt-2 text-center text-secondary">
              <small>©&nbsp;Amelia Henríquez Cross 2024</small>         
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Contact() {
  return (
    <section id="contacto">
      <div className="container py-4 p-4">
        <p className="brackets">
          &#123;
          <span className="title-2">Contact me</span>
          &#125;
        </p>
        <div className="row">
            <div className="col-6 mt-2 contact-icons">
                <a href="mailto:ameliahcross@gmail.com"><MdEmail size={30} fill="white" className="m-4"/></a>
                <a href="https://t.me/ameliahcross"><MdOutlinePhoneIphone size={30} fill="white" className="m-4" /></a>
                <a href="https://github.com/ameliahcross"><FaGithub size={30} fill="white" className="m-4" /></a>
                <a href="www.linkedin.com/in/ameliahcross"><FaLinkedin size={30} fill="white" className="m-4" /></a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

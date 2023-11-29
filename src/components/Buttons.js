import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGraduationCap } from "react-icons/fa6";
import { HiBriefcase } from "react-icons/hi";

// import '../styles/NavigationLists.css';


function Buttons(props) {
	return (
        <div className={props.parentClassName}>
            <a className={props.childClassName} href={props.href}>
                {props.icon}
                {props.nombre}
            </a>
        </div>
	);
}

export default Buttons;
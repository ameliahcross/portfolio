import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Buttons.css';

function Buttons(props) {
	return (
        <div className={`d-grid ${props.parentClassName}`}>
            <a className={props.childClassName} href={props.href}>
                {props.icon}
                {props.nombre}
            </a>
        </div>
	);
}

export default Buttons;
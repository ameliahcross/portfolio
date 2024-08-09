import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/NavigationLists.css';


function NavigationLists(props) {
	return (
        <li className={props.className}>
            <a className={props.className} href={props.href}>
                {props.nombre}
            </a>
        </li>
    );
}

export default NavigationLists;
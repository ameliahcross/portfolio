import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/NavigationLists.css';


function NavigationLists(props) {
	return (
        <div>
            <li className={props.className}>
                <a className={props.className} href={props.href}>
                    {props.nombre}
                </a>
            </li>
        </div>
	);
}

export default NavigationLists;
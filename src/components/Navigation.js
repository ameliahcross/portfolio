import { FaArrowRight } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';
import NavigationLists from "./NavigationLists.js";


function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">H O L A !</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<NavigationLists
							className='nav-link'
							href='#about'
							nombre='Sobre Mi'/>
						<NavigationLists
							className='nav-link'
							href='#portafolio'
							nombre='Habilidades'/>
						<NavigationLists
							className='nav-link'
							href='#portafolio'
							nombre='Proyectos'/>
						<NavigationLists
							className='nav-link'
							href='#portafolio'
							nombre='Contacto'/>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
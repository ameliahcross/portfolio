import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navigation.css';
import NavigationLists from "./NavigationLists.js";


function Navigation() {
	const hamburgerClick = (e) => {
        e.preventDefault();
        console.log('Prevent default activated');
    }
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top-nav">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Hello</a>
				<button onClick={hamburgerClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<NavigationLists
							className='nav-link'
							href='#more-about'
							nombre='About me'/>
						<NavigationLists
							className='nav-link'
							href='#habilidades'
							nombre='Skills'/>
						<NavigationLists
							className='nav-link'
							href='#portafolio'
							nombre='Portfolio'/>
						<NavigationLists
							className='nav-link'
							href='#contacto'
							nombre='Contact me'/>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
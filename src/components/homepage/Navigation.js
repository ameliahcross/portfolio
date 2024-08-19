import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Navigation.css';
import { FaArrowLeft } from 'react-icons/fa'; 
import { useNavigate, Link } from 'react-router-dom';

function Navigation({ showBackArrow }) {
	const navigate = useNavigate();

	const hamburgerClick = (e) => {
        e.preventDefault();
        console.log('Prevent default activated');
    }

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
		  section.scrollIntoView({ behavior: 'smooth' });
		}
	};	

	const handleNavigation = (sectionId) => {
		navigate('/'); 
		setTimeout(() => {
			scrollToSection(sectionId);
		}, 100);
	};

	return (
		<div>
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top-nav">
			<div className="container-fluid mt-3">
				
				{/* Emoji of hand waving */}
				<Link to="/" className="navbar-brand">HELLO <span id='emoji'>
					{String.fromCodePoint('0x0001F44B')}</span>
				</Link>
				
				<button id='hamburger-menu' onClick={hamburgerClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item mar-right-4">
							<Link to="/" onClick={() => handleNavigation('work')} className="nav-link">Work</Link>
						</li>
						<li className="nav-item mar-right-4">
							<Link to="/" onClick={() => handleNavigation('habilidades')} className="nav-link">Skills</Link>
						</li>
						<li className="nav-item mar-right-4">
							<Link to="/" onClick={() => handleNavigation('contacto')} className="nav-link">Contact me</Link>
						</li>
					</ul>
				</div>
						
			</div>
		</nav>
		{showBackArrow && (
		<div className='mt-3 mx-5'>
			<a className="navbar-brand" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
			<FaArrowLeft size={24} color='black' /> 
			</a>
		</div>
		)}
	</div>
	);
}

export default Navigation;
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/MoreAbout.css";
import "../../App.css";
import EducationCards from "./EducationCards";
import WorkCard from './WorkCard';
import Ferreteria from '../../images/ui_ferreteria_mobile.png';
import SD_Navigation from '../../images/sdnavigation/location_app.png';
import Streaming_Desktop from '../../images/itla_tv_desktop.png';
import Anxietin from '../../images/anxiologica/anxietin.png';
import Ui_1 from '../../images/sdnavigation/location_ui_high.png';
import Ui_2 from '../../images/sdnavigation/location_app_ui_front.png';
import Card3 from '../../images/card_ana.png';
import Anxiologica_Cards from '../../images/anxiologica/anxiologica_cards.png';
import Into_Lettering from '../../images/into_lettering.png';
import Card1 from '../../images/miguel.png';
import Card2 from '../../images/saleo.png';
import Insumisas from '../../images/insumisas.png';
import Senaletica from '../../images/senaletica.png';
import Violet from '../../images/violetcharm.png';
import Venaver from '../../images/venaver_branding.png';
import Hablamoelmarte from '../../images/hablamoelmarte.png';
import Enplan from '../../images/enplan.png';
import Majavi_Mobile from '../../images/majavi_mobile_high.png';
import Majavi_Print from '../../images/majavi_menu_2.png';
import Lettering from '../../images/coffee_lettering.png';
import PaginasA_Redes from '../../images/paginas-movil.jpg';
import PaginasA_Imac from '../../images/paginas-ui2_high.jpg';
import PaginasA_Macbook from '../../images/paginasA_macbook.jpg';
import Purple_Ui from '../../images/purple_ui.png';
import Optica from '../../images/optica.png';
import Cajero from '../../images/cajero_digital_dotnet.png';
import Streaming_Mobile from '../../images/itla_tv_management_mobile.png';
import Bookstore from '../../images/bookstore_mobile.png';
import Greendoor from '../../images/greendoor_branding.jpg';

function Work() {
   
    const projects = [
        {
            title: 'SD Navigation',
            image: Ui_1,
            link: '../projects/SDNavigation'
        },
        {
            title: 'My Stock',
            image: Ferreteria,
            link: '../projects/Ferreteria'
        },
        {
            title: 'ITLA TV',
            image: Streaming_Desktop,
            link: '../projects/ItlaTv'
        },
        {
            title: 'Anxietin',
            image: Anxietin,
            link: '../projects/Anxiologica'
        },
        {
            title: 'Attorney',
            image: Card3,
            link: '../projects/Attorney'
        },
        {
            title: 'Anxiologica Cards',
            image: Anxiologica_Cards,
            link: '../projects/Anxiologica'
        },
        {
            title: 'Into Lettering',
            image: Into_Lettering,
            link: '../projects/IntoLettering'
        },
        {
            title: 'Electrical engineer',
            image: Card1,
            link: '../projects/ElectricalEngineer'
        },
        {
            title: 'Saleo',
            image: Card2,
            link: '../projects/Saleo'
        },
        {
            title: 'Insumisas',
            image: Insumisas,
            link: '../projects/Insumisas'
        },
        {
            title: 'Plaza de la Cultura',
            image: Senaletica,
            link: '../projects/PlazaDeLaCultura'
        },
        {
            title: 'Violet Charm',
            image: Violet,
            link: '../projects/VioletCharm'
        },
        {
            title: 'Ven a Ver',
            image: Venaver,
            link: '../projects/VenAver'
        },
        {
            title: 'Hablamo\' el Marte',
            image: Hablamoelmarte,
            link: '../projects/HablamoElMarte'
        },
        {
            title: 'En Plan',
            image: Enplan,
            link: '../projects/EnPlan'
        },
        {
            title: 'Majavi',
            image: Majavi_Mobile,
            link: '../projects/Majavi'
        },
        {
            title: 'Majavi',
            image: Majavi_Print,
            link: '../projects/Majavi'
        },
        {
            title: 'Coffee Lettering',
            image: Lettering,
            link: '../projects/CoffeeLettering'
        },
        {
            title: 'Páginas Amarillas',
            image: PaginasA_Redes,
            link: '../projects/PaginasAmarillas'
        },
        {
            title: 'Páginas Amarillas',
            image: PaginasA_Imac,
            link: '../projects/PaginasAmarillas'
        },
        {
            title: 'Páginas Amarillas',
            image: PaginasA_Macbook,
            link: '../projects/PaginasAmarillas'
        },
        {
            title: 'Optica Félix',
            image: Optica,
            link: '../projects/OpticaFelix'
        },
        {
            title: 'Digital ATM',
            image: Cajero,
            link: '../projects/DigitalAtm'
        },
        {
            title: 'ITLA TV Management',
            image: Streaming_Mobile,
            link: '../projects/ItlaTv'
        },
        {
            title: 'Librería AHC',
            image: Bookstore,
            link: '../projects/LibreriaAHC'
        },
        {
            title: 'Greendoor Branding',
            image: Greendoor,
            link: '../projects/Greendoor'
        }
    ];

    return (
        <section id="work">
            <div className="container">
                <div className="items-center text-center">
                    <h3 className="mt-5">Work</h3>
                    <div className="row row-cols-md-2 row-cols-xs-1 gx-2 mt-5">
                        {projects.map((project, index) => (
                            <WorkCard
                                key={index}
                                title={project.title}
                                image={project.image}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;

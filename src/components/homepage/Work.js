import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/MoreAbout.css";
import "../../App.css";
import EducationCards from "./EducationCards";
import WorkCard from './WorkCard';
import Ferreteria from '../../images/ferreteria/ferreteria_portada-03.png';
import Streaming_Desktop from '../../images/itlatv/itla_tv_desktop.png';
import Anxiologica from '../../images/anxiologica/anxiologica_profile-03.jpg';
import Ui_1 from '../../images/sdnavigation/location_ui_high.png';
import Card3 from '../../images/card_ana.png';
import Anxiologica_Cards from '../../images/anxiologica/anxiologica_cards.png';
import Into_Lettering from '../../images/into_lettering.png';
import Card1 from '../../images/miguel.png';
import Card2 from '../../images/saleo.png';
import Insumisas from '../../images/insumisas.png';
import Senaletica from '../../images/plazacultura/plaza_cultura_pp.jpg';
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
import Optica from '../../images/optica.png';
import Cajero from '../../images/digitalatm/cajero_digital_dotnet.png';
import Streaming_Mobile from '../../images/itlatv/itla_tv_management_mobile.png';
import Bookstore from '../../images/bookstore/bookstore_mobile.png';
import Greendoor from '../../images/greendoor_branding.jpg';

function Work() {
   
    const projects = [
        {
            title: 'SD Navigation',
            image: Ui_1,
            link: '/projects/sd-navigation',
            hasContent: true
        },
        {
            title: 'My Stock',
            image: Ferreteria,
            link: '/projects/ferreteria',
            hasContent: true
        },
        {
            title: 'ITLA TV',
            image: Streaming_Desktop,
            link: '/projects/itla-tv',
            hasContent: true
        },
        {
            title: 'Anxiologica',
            image: Anxiologica,
            link: '/projects/anxiologica',
            hasContent: true
        },
            {
                title: 'Plaza de la Cultura',
                image: Senaletica,
                link: '/projects/plaza-de-la-cultura',
                hasContent: true
            },
        {
            title: 'Attorney',
            image: Card3,
            link: '/projects/attorney',
            hasContent: false
        },
        {
            title: 'Into Lettering',
            image: Into_Lettering,
            link: '/projects/into-lettering',
            hasContent: false
        },
        {
            title: 'Electrical engineer',
            image: Card1,
            link: '/projects/electrical-engineer',
            hasContent: false
        },
        {
            title: 'Saleo',
            image: Card2,
            link: '/projects/saleo',
            hasContent: false
        },
        {
            title: 'Insumisas',
            image: Insumisas,
            link: '/projects/insumisas',
            hasContent: false
        },
        {
            title: 'Violet Charm',
            image: Violet,
            link: '/projects/violet-charm',
            hasContent: false
        },
        {
            title: 'Ven a Ver',
            image: Venaver,
            link: '/projects/ven-aver',
            hasContent: false
        },
        {
            title: 'Hablamo\' el Marte',
            image: Hablamoelmarte,
            link: '/projects/hablamos-el-marte',
            hasContent: false
        },
        {
            title: 'En Plan',
            image: Enplan,
            link: '/projects/en-plan',
            hasContent: false
        },
        {
            title: 'Majavi',
            image: Majavi_Mobile,
            link: '/projects/majavi',
            hasContent: false
        },
        {
            title: 'Majavi',
            image: Majavi_Print,
            link: '/projects/majavi',
            hasContent: false
        },
        {
            title: 'Coffee Lettering',
            image: Lettering,
            link: '/projects/coffee-lettering',
            hasContent: false
        },
        {
            title: 'Páginas Amarillas',
            image: PaginasA_Redes,
            link: '/projects/paginas-amarillas',
            hasContent: false
        },
        {
            title: 'Páginas Amarillas',
            image: PaginasA_Imac,
            link: '/projects/paginas-amarillas',
            hasContent: false
        },
        {
            title: 'Páginas Amarillas',
            image: PaginasA_Macbook,
            link: '/projects/paginas-amarillas',
            hasContent: false
        },
        {
            title: 'Optica Félix',
            image: Optica,
            link: '/projects/optica-felix',
            hasContent: false
        },
        {
            title: 'Digital ATM',
            image: Cajero,
            link: '/projects/digital-atm',
            hasContent: false
        },
        {
            title: 'ITLA TV Management',
            image: Streaming_Mobile,
            link: '/projects/itla-tv',
            hasContent: false
        },
        {
            title: 'Librería AHC',
            image: Bookstore,
            link: '/projects/libreria-ahc',
            hasContent: false
        },
        {
            title: 'Greendoor Branding',
            image: Greendoor,
            link: '/projects/greendoor',
            hasContent: false
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
                                hasContent={project.hasContent}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;

import './nav.scss'

//Importer les Links du router
import { Link } from 'react-router-dom'

export default function nav(){

//Création d'une cosntante pour la page active (surlignae de celle-ci)
    const currentPage = window.location.pathname;

    return (
        <nav>
            <Link to='/'className={currentPage === '/' ? 'link_page_active' : 'link_page'}>
                Accueil
            </Link>
            <Link to='/about' className={currentPage === '/about' ? 'link_page_active' : 'link_page'}>
                À Propos
            </Link>
        </nav>
    )
}
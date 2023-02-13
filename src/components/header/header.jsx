//Importer la feuille de style
import './header.scss'

//Importer le logo
import Logo from '../../assets/LOGO.png'

//Importer la barre de navigation
import Nav from '../nav/nav'

//Code du header
export default function Header() {
    return (
        <header>
            <h1>
                <img src={Logo} alt="KASA, logo du site"/>
            </h1>
            <Nav />
        </header>
    )
}
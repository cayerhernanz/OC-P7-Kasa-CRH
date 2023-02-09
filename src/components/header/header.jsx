//Importer la feuille de style
import './header.scss'

//Création d'un prop pour le logo
import Logo from '../../assets/LOGO.png'

//Code du header
export default function Header() {
    return (
        <header>
            <h1>
                <img src={Logo} alt="KASA, logo du site"/>
            </h1>
            <p>Nav</p>
        </header>
    )
}
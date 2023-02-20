//Importer la feuille de style
import './header.scss'

//Importer le logo
import Logo from '../../assets/LOGO.png'

//Importer la barre de navigation
import Nav from '../nav/nav'

import { Link } from 'react-router-dom'

//Code du header
export default function Header() {
    return (
        <header>
            <Link Link to='/'>
                <img src={Logo} alt="KASA, logo du site"/>
            </Link>
            <Nav />
        </header>
    )
}
//Importer la feuille de style et créer le prop de l'image
import './footer.scss'
import logo from '../../assets/Logo-footer.png'

export default function Footer() {
    return (
        <footer>
            <img src={logo} alt= "KASA, logo du site" />
            <p> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}
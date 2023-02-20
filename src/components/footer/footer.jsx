//Importer la feuille de style et créer le prop de l'image
import './footer.scss'
import logo from '../../assets/Logo-footer.png'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function Footer() {
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname ==='/about'){
            setAboutPage(true)
        };
    })

    return (
        <footer className={aboutPage ? "footer_about" : "footer"}>
            <img src={logo} alt= "KASA, logo du site" />
            <p> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}
import './banner.scss'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function Banner() {
    //constantes pour le hook de localistation
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname ==='/about'){
            setAboutPage(true)
        };
    })

    return (
        <section className='banner'>
            <div className={aboutPage ? "banner_hidden" : "banner_home"}>
                <p>Chez vous, partout et ailleurs</p>
            </div>

            <div className={aboutPage ? "banner_about" : "banner_hidden"}>
            </div>
        </section>
    )
}
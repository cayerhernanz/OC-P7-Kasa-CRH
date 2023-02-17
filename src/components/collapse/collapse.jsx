import './collapse.scss'
import arrow from '../../assets/collapse-arrow.png'


//importer useState pour définir l'etat 'ouverture du collapse (useEffect et uselocation pour définmir la classe du collapse en fonction de sa localisation)
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

export default function Collapse({title, content}) {

    //Constantes toggle pour le hook pour l'ouverture du collapse
    const [toggle, setToggle] = useState(false);

    //Constantes pour le hook localisation
    const [aboutPage, setAboutPage] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location.pathname ==='/about'){
            setAboutPage(true)
        };
    } , [])

    return (
        <div className={aboutPage ? "collapse" : 'collapse_logement'}>
            <details>
                <summary className='collapse_header' onClick={() => setToggle(!toggle)}>
                    <h3>{title}</h3>
                    <img className={toggle ? 'arrow_down' : 'arrow_up'} src={arrow} alt="icone de flèche"/>
                </summary>
                <div className='collapse_content'>
                    <p>{content}</p>
                </div>
            </details>
        </div>
    )

}
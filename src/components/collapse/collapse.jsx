import './collapse.scss'
import arrow from '../../assets/collapse-arrow.png'


//importer useState pour définir l'etat 'ouverture du collapse
import {useState} from 'react';

//Variables de la fonction pour l'affichage dynamique à aprtir des données des JSON
export default function Collapse({title, content}){

    //Constantes toggle pour le hook pour l'ouverture du collapse
    const [toggle, setToggle] = useState(false);

    return (
        <div className="collapse">
            <div className='collapse_header' onClick={() => setToggle(!toggle)}>
                <h3>{title}</h3>
                <img className={toggle ? 'arrow_up' : 'arrow_down'} src={arrow} alt="icone de flèche"/>
            </div>
            <div className={toggle ? 'collapse_content' : 'collpase_content_hidden'}>
                {Array.isArray(content) ? content.map((item, index) => { //Récupérer le contenu du tableau de données
                    return (
                        <p key={index}>{item}</p>
                    )
                }) : content
                }
            </div>
        </div>
    )
}
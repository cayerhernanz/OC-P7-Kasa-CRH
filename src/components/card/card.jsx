import './card.scss'

//importer le line pour créer les liens vers les pages logement
import { Link } from 'react-router-dom'

export default function card({id, title, coverImg}){
    return (
        <Link to={`/logement/${id}`} className='gallery__card'>
                <img src={coverImg} alt={title} />
                <h2>{title}</h2>
        </Link>
    )
}
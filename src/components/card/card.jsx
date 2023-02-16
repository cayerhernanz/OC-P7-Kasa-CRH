import './card.scss'

//importer le line pour créer les liens vers les pages logement
import { Link } from 'react-router-dom'

export default function card({id, title, coverImg}){
    return (
        <Link to={`/logement/${id}`} className='gallery_card'>
                <img className= "gallery_card_image" src={coverImg} alt={title} />
                <div className='gallery_card_body'>
                    <h2>{title}</h2>
                </div>
        </Link>
    )
}
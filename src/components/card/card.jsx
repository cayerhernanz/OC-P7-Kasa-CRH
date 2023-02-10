import './card.scss'

export default function card({id, title, coverImg}){
    return (
        <div className='gallery__card'>
                <img src={coverImg} alt={title} />
                <h2>{title}</h2>
        </div>
    )
}
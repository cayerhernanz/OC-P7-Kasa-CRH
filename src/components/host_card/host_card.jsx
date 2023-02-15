import './host_card.scss'

export default function HostCard(array){
    //Séparer le nom du prénom pour l'afficher en 2 hauteurs
    const name = array.host.name.split(' ');
    const picture = array.host.picture;
    return(
        <div className='host_card'>
            <h3>
                <span>{name[0]}</span>
                <span>{name[1]}</span>
            </h3>
            <img src={picture} alt="hôte"/>
        </div>
    )
}
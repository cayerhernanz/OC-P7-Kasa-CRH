import './host_card.scss'

export default function HostCard(array, name, picture){
    //Séparer le nom du prénom pour l'afficher en 2 hauteurs
    const hostname = array.name.split(' ');
    const hostpicture = array.picture;
    return(
        <div className='host_card'>
            <h3>
                <span>{hostname[0]}</span>
                <span>{hostname[1]}</span>
            </h3>
            <img src={hostpicture} alt="hôte"/>
        </div>
    )
}
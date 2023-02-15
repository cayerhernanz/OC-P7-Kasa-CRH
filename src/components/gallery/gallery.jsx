import './gallery.scss'
import Card from '../card/card'

//importer les données du fichier de données
import data from '../../data/data_logement.json'

export default function gallery(){
    return (
        <section className='gallery'>
           {data.map(data => {
            return (
                <Card 
                id={data.id}
                title={data.title}
                coverImg={data.cover}
                />
            )
           })}
        </section>
    )
}
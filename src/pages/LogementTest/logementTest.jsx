import './logementTest.scss'

//Test page logement avec moins de composants (fiche logement codée directement)

import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import logementData from '../../data/data_logement.json'

import fullStar from '../../assets/rate-star-full.png'
import emptyStar from '../../assets/rate-star-empty.png'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Carrousel from '../../components/carrousel/carrousel'
import Collapse from '../../components/collapse/collapse'
import Tag from '../../components/tag/tag'
import HostCard from '../../components/host_card/host_card'


export default function LogementTest(){

    //Définir les constantes pour le routage correct et récupération des données
    const idLogement = useParams('id').id;
    const dataCurrentLogement = logementData.filter(data => data.id === idLogement); //Récupérer les données correctes via un filtrage du tableau
    const description = dataCurrentLogement[0].description;
    const equipements = dataCurrentLogement[0].equipements;
    const tags = dataCurrentLogement[0].tags;
    // const index = tags.map(index);
    // const tag = tags.map(tag);

    //Récupérer les images pour le carrousel
    const [imageSlider, setImageSlider] = useState();

    useEffect(() => {
        const dataCurrentLogement = logementData.filter(data => data.id === idLogement)
        setImageSlider(dataCurrentLogement.pictures);
    }, [idLogement]);

    return(
    <body className='logement'>
        <Header />
        <main className='logement_file'>
        <Carrousel imageSlider={{imageSlider}}/>
        <div className='logement_file_content'>
                <div className='logement_file_content_head'>
                    <div className='logement_file_content_head_leftblock'>
                        <h2>{dataCurrentLogement[0].title}</h2>
                        <h3>{dataCurrentLogement[0].location}</h3>
                        <div className='logement_file_content_head_leftblock_tagcontainer'>                            
                                                         
                        </div>
                    </div>
                    <div className='logement_file_content_head_rightblock'>
                        <HostCard array={dataCurrentLogement[0].host} name={dataCurrentLogement[0].host.name} picture={dataCurrentLogement[0].host.picture}/>

                        <div className="logement_file_content_head_rightbloc_rating">
							{[...Array(5)].map((index) => {
								const ratingValue = index + 1;
                                const rating = dataCurrentLogement[0].rating;
								return (
									<img key={index} src={ratingValue <= rating ? fullStar: emptyStar} alt="star" />
								)
							})}
						</div>
                    </div>
                </div>
                <div className='logement_file_content_body'>
                    <Collapse title={'Description'} content={description}/>
                    <Collapse title={'Equipements'} content={equipements}/>
                </div>
            </div>
        </main>
        <Footer />
    </body>
    )
}
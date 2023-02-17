import './logement.scss'
import {useEffect, useState} from 'react'
import {useParams, useNavigate } from 'react-router-dom'

import fullStar from '../../assets/rate-star-full.png'
import emptyStar from '../../assets/rate-star-empty.png'

import logementData from '../../data/data_logement.json'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Carrousel from '../../components/carrousel/carrousel'
import Collapse from '../../components/collapse/collapse'
import HostCard from '../../components/host_card/host_card'
import Tag from '../../components/tag/tag'
import Rating from '../../components/rating/rating'


export default function Logement(){

    const idLogement = useParams('id').id;

    //constante pour la redirection en cas d'erreur
    const navigate = useNavigate();

    //Récupérer les données du JSON
    const [currentLogement, setCurrentLogement] = useState('');

    useEffect(() => {
        const [importedData] = logementData.filter(data => data.id === idLogement);
        setCurrentLogement(importedData);
        if(currentLogement === null){
            navigate("/notfound");
        }
    }, []);
   
    return(
    <div className='logement'>
        <Header />
        <main className='logement_file'>
        
        <div className='logement_file_content'>
                <div className='logement_file_content_head'>
                    <div className='logement_file_content_head_leftblock'>
                        <h2>{currentLogement.title}</h2>
                        <h3>{currentLogement.location}</h3>
                        <div className='logement_file_content_head_leftblock_tagcontainer'>                            
                            {/* <Tag array={currentLogement.tags} /> */}
                        </div>
                    </div>
                    <div className='logement_file_content_head_rightblock'>
                        <p>host comp</p>
                        <div className="logement_file_content_head_rightblock_rating">
                        {[...Array(5)].map((index) => {
								const ratingValue = index + 1;
                                const rating = currentLogement.host.rating;
								return (
									<img key={index} src={ratingValue <= rating ? fullStar: emptyStar} alt="star" />
								)
							})}
						</div>
                    </div>
                </div>
                <div className='logement_file_content_body'>
                    <Collapse title='Description' content={currentLogement.description} />
                    {/* <Collapse title='Équipements' content={currentLogement.equipments.map((item, index) => <p key={index}>{item}</p>)} />                                */}
                </div>
            </div>
        </main>
        <Footer />
    </div>
    )
}
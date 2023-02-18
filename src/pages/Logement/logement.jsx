import './logement.scss'
import {useEffect, useState} from 'react'
import {useParams, useNavigate } from 'react-router-dom'

import logementData from '../../data/data_logement.json'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Carrousel from '../../components/carrousel/carrousel'
import Collapse from '../../components/collapse/collapse'
import Tag from '../../components/tag/tag'
import Rating from '../../components/rating/rating'


export default function Logement(){

    const idLogement = useParams('id').id;

    //constante pour la redirection en cas d'erreur
    const navigate = useNavigate();

    //Récupérer les données du JSON
    const [currentLogement, setCurrentLogement] = useState();

    useEffect(() => {
        const [importedData] = logementData.filter(data => data.id === idLogement);
        setCurrentLogement(importedData);
        if(currentLogement === null){
            navigate("/notfound");
        }
    }, []);

    const images = currentLogement && currentLogement.pictures;
    const tags = currentLogement && currentLogement.tags;
    const hostInfo = currentLogement && currentLogement.host;
    const hostName = currentLogement && hostInfo.name.split(' ');
    const equipments = currentLogement && currentLogement.equipments;
    const equipmentContent = currentLogement && equipments.map((item, index) => (<span key={index}>{item}<br/></span>));
    
    return(
        currentLogement && (
    <div className='logement'>
        <Header />
        <main className='logement_file'>
            <Carrousel images={images} />
            <div className='logement_file_content'>
                <div className='logement_file_content_head'>
                    <div className='logement_file_content_head_leftblock'>
                        <h2>{currentLogement.title}</h2>
                        <h3>{currentLogement.location}</h3>
                        <div className='logement_file_content_head_leftblock_tagcontainer'>
                            {tags.map((tag) =>
                                <Tag key={tag} tag={tag} />
                            )}                            
                            {/* <Tag array={tagsContent} /> */}
                            {/* <h4 className='tag'>tag</h4>
                            <h4 className='tag'>tag</h4>
                            <h4 className='tag'>tag</h4> */}
                        </div>
                    </div>
                    <div className='logement_file_content_head_rightblock'>
                        <div className='host_card'>
                            <h3>
                                <span>{hostName[0]}</span>
                                <span>{hostName[1]}</span>
                            </h3>
                            <img src={hostInfo.picture} alt="hôte" className='host_card_img'/>
                        </div>
                        <Rating rating={currentLogement.rating}/>
                    </div>
                </div>
                <div className='logement_file_content_body'>
                    <Collapse title='Description' content={currentLogement.description} />
                    <Collapse title='Équipements' content={equipmentContent} />
                </div>
            </div>
        </main>
        <Footer />
    </div>
    )
    )
}
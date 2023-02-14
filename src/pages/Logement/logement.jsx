import './logement.scss'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import logementData from '../../data/data_logement.json'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LogementFile from '../../components/logement_file/logement_file'

export default function Logement(){

    //Définir les constantes pour le routage correct et récupération des données
    const idLogement = useParams('id').id;
    const dataCurrentLogement = logementData.filter(data => data.id === idLogement) //Récupérer les données correctes via un filtrage du tableau

    return(
    <body className='logement'>
        <Header />
        <LogementFile array={dataCurrentLogement}/>
        <Footer />
    </body>
    )
}
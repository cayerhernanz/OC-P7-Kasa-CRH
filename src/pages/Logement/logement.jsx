import './logement.scss'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LogementFile from '../../components/logement_file/logement_file'

export default function Logement(){

    return(
    <body className='logement'>
        <Header />
        <LogementFile />
        <Footer />
    </body>
    )
}
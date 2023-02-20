import './about.scss'

//importer les données de la page à propos depuis le json
import aboutData from '../../data/data_about.json'

import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'
import Collapse from '../../components/collapse/collapse'

export default function About() {
    return (
        <div className='about'>
            <Header />
            <div className='banner_container'>
            <Banner />
            </div>
            <main>
                {aboutData.map(data => {
                    return (   
                    <Collapse title={data.title} content={data.content} key={data.id}/>    
                    )
                }
                )}
            </main>
            <Footer />
        </div>
    )
}
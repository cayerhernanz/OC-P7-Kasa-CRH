import './about.scss'

//importer les données de la page à propos depuis le json
import aboutData from '../../data/data_about.json'

import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'
import Collapse from '../../components/collapse/collapse'

export default function About() {
    return (
        <body className='about'>
            <Header />
            <Banner />
            <main>
                {aboutData.map(data => {
                    return (
                        <div key={data.id} className="about_collapse">
                            <Collapse title={data.title} content={data.content}/>
                        </div>
                    )
                }
                )}
            </main>
            <Footer />
        </body>
    )
}
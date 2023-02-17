//Importer les composants
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Banner from '../../components/banner/banner'
import Gallery from '../../components/gallery/gallery'

//Code de la page
export default function Home() {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <Gallery />
            <Footer />
        </div>
    )
}
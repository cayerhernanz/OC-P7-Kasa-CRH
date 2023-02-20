//Importer les composants
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

//Importer les links du router
import { Link } from 'react-router-dom'

//Importer la feuille de style
import './Error404.scss'

//Code de la page
export default function Error404() {
    return (
        <div className='error404'>
            <Header />
            <main className='error404__main'>
                <section className='error404__main__message'>
                    <h2>404</h2>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                </section>
                <Link to='/' className='error404__main__link'>Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </div>
    )
}
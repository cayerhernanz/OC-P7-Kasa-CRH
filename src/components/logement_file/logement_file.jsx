import './logement_file.scss'

import Collapse from '../collapse/collapse'

export default function LogementFile() {
    return (
        <section className='logement_file'>
            <div>Carrousel</div>
            <div className='logement_file_content'>
                <div className='logement_file_content_head'>
                    <div className='logement_file_content_head_leftblock'>
                        <h2>Titre</h2>
                        <h3>location</h3>
                        <div className='logement_file_content_head_leftblock_tagcontainer'>
                            <h4 className='tag'>tags comp</h4>
                        </div>
                    </div>
                    <div className='logement_file_content_head_rightblock'>
                        <p>host comp</p>
                        <p>star rating comp</p>
                    </div>
                </div>
                <div className='logement_file_content_body'>
                    <Collapse />
                    <Collapse />
                </div>
            </div>
        </section>
    )
}
import './logement_file.scss'

import Collapse from '../collapse/collapse'
import Tag from '../tag/tag.jsx'
import HostCard from '../host_card/host_card'

export default function LogementFile(title, location, equipements, description, tag, index, host) {
    return (
        <main className='logement_file'>
            <div>Carrousel</div>
            <div className='logement_file_content'>
                <div className='logement_file_content_head'>
                    <div className='logement_file_content_head_leftblock'>
                        <h2>{title}</h2>
                        <h3>{location}</h3>
                        <div className='logement_file_content_head_leftblock_tagcontainer'>
                            <Tag tag={tag} index={index}/>
                        </div>
                    </div>
                    <div className='logement_file_content_head_rightblock'>
                        <HostCard array={host}/>
                        <p>star rating comp</p>
                    </div>
                </div>
                <div className='logement_file_content_body'>
                    <Collapse title={'description'} content={description}/>
                    <Collapse title={'equipements'} content={equipements}/>
                </div>
            </div>
        </main>
    )
}
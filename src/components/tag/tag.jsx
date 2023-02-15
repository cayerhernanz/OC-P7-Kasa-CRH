import './tag.scss'

export default function Tag(tag, index){
    return (
            <h4 className='tag' key={index}>{tag}</h4>
    )
}

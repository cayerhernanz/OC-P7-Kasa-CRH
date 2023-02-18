import './tag.scss'

export default function Tag(tag){
    return (
        <h4 className='tag' key={tag}>{tag}</h4>
    )        
}

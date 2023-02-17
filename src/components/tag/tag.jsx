import './tag.scss'

export default function Tag(array){
    const tagArray = {array}       
    tagArray.map((index, tag) => {
        return (
            <h4 className='tag' key={index}>{tag}</h4>
        )
    })
        
}

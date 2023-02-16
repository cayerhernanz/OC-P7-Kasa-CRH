import './rating.scss'
import fullStar from '../../assets/rate-star-full.png'
import emptyStar from '../../assets/rate-star-empty.png'

export default function Rating(hostRating){
    const ratingArray = Array(5).fill(fullStar);
    const emptyArray = Array(5).fill(emptyStar);
   
    return (
        <div className='rating'>
            {ratingArray.slice(5-{hostRating}).map(starRating => {
                return(
                    <span>{starRating}</span>
                )
            })}
            {emptyArray.slice(hostRating).map(totalrating => {
                return(
                    <span>{totalrating}</span>
                )})
            }
        </div>
    )
}
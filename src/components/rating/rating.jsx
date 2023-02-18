import './rating.scss'
import fullStar from '../../assets/rate-star-full.png'
import emptyStar from '../../assets/rate-star-empty.png'

export default function Rating({ rating }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rating">
			{stars.map((score) =>
				rating >= score ? (
					<img key={score.toString()} src={fullStar} alt="star"/>
				) : ( 
					<img key={score.toString()} src={emptyStar} alt="star"/>
				)
			)}
		</div>
	);
}
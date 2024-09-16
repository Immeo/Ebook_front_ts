export function renderRating(rating: number): JSX.Element[] {
	const maxStars = 5;
	const filledStars = Math.floor(rating);
	const halfStars = rating - filledStars >= 0.5 ? 1 : 0;
	const emptyStars = maxStars - filledStars - halfStars;

	return [
		...Array(filledStars).fill(
			<i key='filled' className='fas fa-star text-yellow-400' />
		),
		halfStars > 0 ? (
			<i key='half' className='fas fa-star-half-alt text-yellow-400' />
		) : null,
		...Array(emptyStars).fill(
			<i key='empty' className='fas fa-star text-gray-400' />
		)
	].filter(Boolean); // Удаляем null значения
}

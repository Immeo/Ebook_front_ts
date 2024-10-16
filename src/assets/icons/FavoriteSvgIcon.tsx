interface IFavoriteSvgIconProps {
	width?: number; // Сделать параметр необязательным
	height?: number; // Сделать параметр необязательным
	color?: string; // Сделать параметр необязательным
}

function FavoriteSvgIcon({
	width = 30, // Значение по умолчанию для ширины
	height = 30, // Значение по умолчанию для высоты
	color = 'black' // Значение по умолчанию для цвета
}: IFavoriteSvgIconProps = {}): JSX.Element {
	// Параметры по умолчанию для функции
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fillRule='evenodd'
			width={width}
			height={height}
			strokeLinejoin='round'
			strokeMiterlimit='2'
			clipRule='evenodd'
			viewBox='0 0 500 500'
			id='like'
		>
			<path
				fill={color}
				d='M250,115C297.368,25 392.105,25 439.474,70C486.844,115 486.844,205 439.474,295C406.316,362.5 321.053,430 250,475C178.947,430 93.684,362.5 60.526,295C13.158,205 13.158,115 60.526,70C107.895,25 202.632,25 250,115Z'
				transform='translate(-9.464 -17.476)scale(1.03785)'
			></path>
		</svg>
	);
}

export default FavoriteSvgIcon;

import React, { useState } from 'react';
import { IIconProps, IRatingProps } from './Rating.props';

const FullStar = ({ size = 24, color = '#000000' }: IIconProps) => {
	return (
		<div style={{ color: color }}>
			<svg height={size} viewBox='0 0 24 24'>
				<path
					d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
					fill='currentColor'
				/>
				<path d='M0 0h24v24H0z' fill='none' />
			</svg>
		</div>
	);
};

const HalfStar = ({ size = 24, color = '#000000' }: IIconProps) => {
	return (
		<div style={{ color: color }}>
			<svg height={size} viewBox='0 0 24 24'>
				<path
					d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
					fill='currentColor'
				/>
				<path d='M0 0h24v24H0z' fill='none' />
			</svg>
		</div>
	);
};

const EmptyStar = ({ size = 24, color = '#000000' }: IIconProps) => {
	return (
		<div style={{ color: color }}>
			<svg height={size} viewBox='0 0 24 24'>
				<path
					d='M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
					fill='currentColor'
				/>
				<path d='M0 0h24v24H0z' fill='none' />
			</svg>
		</div>
	);
};

const Rating: React.FC<IRatingProps> = ({
	count,
	value,
	color = '#ffd700',
	hoverColor = '#ffc107',
	activeColor = '#ffc107',
	size = 30,
	edit = false,
	isHalf = true,
	onChange,
	emptyIcon = <EmptyStar />,
	halfIcon = <HalfStar />,
	fullIcon = <FullStar />
}) => {
	const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

	const onMouseMoves = (index: number) => {
		if (!edit) {
			return;
		}
		setHoverValue(index);
	};

	const onMouseLeaving = () => {
		if (!edit) {
			return;
		}
		setHoverValue(undefined);
	};

	const onClicked = (index: number) => {
		if (!edit) {
			return;
		}
		if (onChange) {
			onChange(index + 1);
		}
	};

	const getColor = (index: number) => {
		if (hoverValue !== undefined) {
			if (index <= hoverValue) {
				return hoverColor;
			}
		}
		if (value > index) {
			return activeColor;
		}
		return color;
	};

	const stars = [];

	for (let i = 0; i < count; i++) {
		let star: React.ReactElement;
		if (isHalf && value - i > 0 && value - i < 1) {
			star = halfIcon;
		} else if (i < value) {
			star = fullIcon;
		} else {
			star = emptyIcon;
		}

		if (hoverValue !== undefined) {
			if (i <= hoverValue) {
				star = fullIcon;
			}
		}

		stars.push(
			<div
				key={i}
				style={{ cursor: 'pointer' }}
				onMouseMove={() => onMouseMoves(i)}
				onMouseLeave={onMouseLeaving}
				onClick={() => onClicked(i)}
			>
				{React.cloneElement(star, {
					size: size,
					color: getColor(i)
				})}
			</div>
		);
	}

	return <div className='flex items-center gap-1'>{stars}</div>;
};

export default Rating;

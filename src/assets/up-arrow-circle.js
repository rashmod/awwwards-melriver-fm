import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { NavContext } from '../context/nav-context';

const arrowVariant = {
	initial: {
		strokeDashoffset: -193,
		strokeDasharray: 193,
	},
	animateOpen: {
		strokeDashoffset: 0,
		// strokeDasharray: 0,
		transition: { duration: 0.6 },
	},
	animateClose: {
		strokeDashoffset: -193,
		transition: { duration: 0.6 },
	},
};

const UpArrow = ({ ease }) => {
	const { menuOpened } = useContext(NavContext);

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='64'
			height='64'
			viewBox='0 0 64 64'>
			<g
				id='Group_1'
				data-name='Group 1'
				transform='translate(-152 -439)'>
				<line
					id='Line_1'
					data-name='Line 1'
					y1='14.91'
					transform='translate(184 463.788)'
					fill='none'
					stroke='#000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2.5'
				/>
				<path
					id='Path_1'
					data-name='Path 1'
					d='M6,9.155,10.949,5'
					transform='translate(173.051 458.302)'
					fill='none'
					stroke='#000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2.5'
				/>
				<path
					id='Path_2'
					data-name='Path 2'
					d='M10.949,5,15.9,9.155'
					transform='translate(173.051 458.302)'
					fill='none'
					stroke='#000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2.5'
				/>
				<g
					id='Ellipse_1'
					data-name='Ellipse 1'
					transform='translate(152 439)'
					fill='none'
					stroke='rgba(0,0,0,0.2)'
					strokeWidth='2.5'>
					<circle cx='32' cy='32' r='32' stroke='none' />
					<motion.circle
						variants={arrowVariant}
						initial='initial'
						animate={menuOpened ? 'animateOpen' : 'animateClose'}
						transition={{ ease: ease }}
						id='circle'
						cx='32'
						cy='32'
						r='30.75'
						fill='none'
					/>
				</g>
			</g>
		</svg>
	);
};

export default UpArrow;

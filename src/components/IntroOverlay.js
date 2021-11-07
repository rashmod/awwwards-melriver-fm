import { motion } from 'framer-motion';
import React from 'react';

const overlayVariant = {
	animate: {
		transition: {
			delayChildren: 1.2,
			staggerChildren: 1,
		},
	},
};

const topParentVariant = {
	animate: {
		transition: {
			staggerChildren: 0.25,
		},
	},
};

const topVariant = {
	animate: {
		scaleY: 0,
		transformOrigin: 'bottom',
		transition: { duration: 0.7, ease: [0.78, 0, 0.36, 1] },
	},
};

const bottomParentVariant = {
	animate: {
		transition: {
			staggerChildren: 0.25,
		},
	},
};

const bottomVariant = {
	animate: {
		scaleX: 0,
		transformOrigin: 'right',
		transition: { duration: 0.7, ease: [0.78, 0, 0.36, 1] },
	},
};
const IntroOverlay = ({ onAnimationComplete, ease }) => {
	return (
		<motion.div
			variants={overlayVariant}
			initial='initial'
			animate={'animate'}
			exit='exit'
			onAnimationComplete={onAnimationComplete}
			className='intro-overlay'>
			<motion.div variants={topParentVariant} className='top'>
				<motion.div
					variants={topVariant}
					className='overlay-top'></motion.div>
				<motion.div
					variants={topVariant}
					className='overlay-top'></motion.div>
				<motion.div
					variants={topVariant}
					className='overlay-top'></motion.div>
			</motion.div>
			<motion.div variants={bottomParentVariant} className='bottom'>
				<motion.div
					variants={bottomVariant}
					className='overlay-bottom'></motion.div>
				<motion.div
					variants={bottomVariant}
					className='overlay-bottom'></motion.div>
				<motion.div
					variants={bottomVariant}
					className='overlay-bottom'></motion.div>
			</motion.div>
		</motion.div>
	);
};

export default IntroOverlay;

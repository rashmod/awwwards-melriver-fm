import { motion } from 'framer-motion';
import React from 'react';
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg';

const headerVariant = {
	initial: {
		y: 100,
		skewY: 7,
	},
	animate: {
		y: 0,
		ease: 'power4.out',
		delay: 0.5,
		skewY: 0,
		transition: { duration: 0.9 },
	},
};

const Banner = ({ showAnimation }) => {
	return (
		<motion.section
			initial={showAnimation ? 'initial' : ''}
			animate='animate'
			layout
			className='main'>
			<div className='container'>
				<div className='row'>
					<h2>
						<div className='line'>
							<motion.span variants={headerVariant}>
								We craft eCommerce brands,
							</motion.span>
						</div>
						<div className='line'>
							<motion.span variants={headerVariant}>
								driven by instinct.
							</motion.span>
						</div>
					</h2>
					<div className='btn-row'>
						<a href='/'>
							More about us <RightArrow />
						</a>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Banner;

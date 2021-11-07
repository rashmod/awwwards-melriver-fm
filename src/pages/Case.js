import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

export const Case1 = () => {
	return (
		<>
			<Link to='/' className='casePage'>
				<motion.img
					layoutId='curology-min'
					transition={{ duration: 1 }}
					src={require(`../assets/curology-min.png`).default}
					alt=''
				/>
			</Link>
		</>
	);
};

export const Case2 = () => {
	return (
		<Link to='/' className='casePage'>
			<motion.img
				layoutId='yourspace-min'
				transition={{ duration: 1 }}
				src={require(`../assets/yourspace-min.png`).default}
				alt=''
			/>
		</Link>
	);
};

export const Case3 = () => {
	return (
		<Link to='/' className='casePage'>
			<motion.img
				layoutId='lumin-min'
				transition={{ duration: 1 }}
				src={require(`../assets/lumin-min.png`).default}
				alt=''
			/>
		</Link>
	);
};

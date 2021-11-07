import React, { forwardRef } from 'react';
import { ReactComponent as CasesNext } from '../assets/arrow-right.svg';
import { ReactComponent as CasesPrev } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const caseStudies = [
	{
		id: 1,
		subtitle: 'Curology',
		title: "A custom formula for your skin's unique needs",
		img: 'curology-min',
	},
	{
		id: 2,
		subtitle: 'Yourspace',
		title: 'Open space floor plans for you next venture',
		img: 'yourspace-min',
	},
	{
		id: 3,
		subtitle: 'Lumin',
		title: 'For your best look ever',
		img: 'lumin-min',
	},
];

const MotionLinkComponent = forwardRef((props, ref) => (
	<Link {...props}>{props.children}</Link>
));
const MotionLink = motion(MotionLinkComponent);

const Cases = () => {
	return (
		<section className='cases'>
			<div className='container-fluid'>
				<div className='cases-navigation'>
					<div className='cases-arrow prev'>
						<CasesPrev />
					</div>
					<div className='cases-arrow next'>
						<CasesNext />
					</div>
				</div>
				<div className='row'>
					{caseStudies.map((caseItem) => (
						<Link
							to={caseItem.img}
							className='case'
							key={caseItem.id}>
							<div className='case-details'>
								<span>{caseItem.subtitle}</span>
								<h2>{caseItem.title}</h2>
							</div>
							<div className='case-image'>
								<motion.img
									layoutId={caseItem.img}
									transition={{ duration: 0.5 }}
									src={
										require(`../assets/${caseItem.img}.png`)
											.default
									}
									alt={caseItem.title}
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Cases;

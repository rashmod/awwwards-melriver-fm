import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavContext } from '../context/nav-context';

const Navigation = () => {
	const { menuOpened } = useContext(NavContext);

	return (
		<motion.nav
			animate={
				menuOpened
					? { display: 'block' }
					: { display: 'none', transition: { delay: 0.75 } }
			}
			className='navbar'>
			<div className='container'>
				<div className='nav-columns'>
					<div className='nav-column'>
						<div className='nav-label'>Menu</div>
						<ul className='nav-links'>
							<li>
								<NavLink to='/case-studies' exact>
									Case Studies
								</NavLink>
							</li>
							<li>
								<NavLink to='/approach' exact>
									Approach
								</NavLink>
							</li>
							<li>
								<NavLink to='/services' exact>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink to='/about-us' exact>
									About Us
								</NavLink>
							</li>
						</ul>
					</div>
					<div className='nav-column'>
						<div className='nav-label'>Contact</div>
						<div className='nav-infos'>
							<ul className='nav-info'>
								<li className='nav-info-label'>Email</li>
								<li>
									<NavLink to='/contact' exact>
										Get in touch with us
									</NavLink>
								</li>
								<li>
									<NavLink to='/audit' exact>
										Get a free audit
									</NavLink>
								</li>
							</ul>
							<ul className='nav-info'>
								<li className='nav-info-label'>Headquarters</li>
								<li>Route du Jura 49</li>
								<li>1700 Fribourg</li>
								<li>Switzerland</li>
							</ul>
							<ul className='nav-info'>
								<li className='nav-info-label'>Phone</li>
								<li>+41 (0) 75 510 28 70</li>
							</ul>
							<ul className='nav-info'>
								<li className='nav-info-label'>Legal</li>
								<li>Privacy and Cookies</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default Navigation;

import { motion, useCycle } from 'framer-motion';
import React, { useContext, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import UpArrow from '../assets/up-arrow-circle';
import { NavContext } from '../context/nav-context';

const hamburgerVariant = {
	open: { scaleX: 1, transition: { delay: 0.6 } },
	close: { scaleX: 0 },
};

const Header = ({ history, ease }) => {
	const { menuOpened, setMenuOpened } = useContext(NavContext);
	const [hamburger, cycleHamburger] = useCycle('open', 'close');
	useEffect(() => {
		history.listen(() => setMenuOpened(false));
	}, [history, setMenuOpened]);

	return (
		<div className='header'>
			<div className='container'>
				<div className='row v-center space-between'>
					<div className='logo'>
						<NavLink to='/' exact>
							AGENCY.
						</NavLink>
					</div>
					<motion.nav
						onClick={() => cycleHamburger()}
						className='nav-toggle'>
						<motion.div
							onClick={() => setMenuOpened((prev) => !prev)}
							variants={hamburgerVariant}
							animate={hamburger}
							transition={{ eaes: ease }}
							className='hamburger-menu'>
							<span></span>
							<span></span>
						</motion.div>
						<motion.div
							onClick={() => setMenuOpened((prev) => !prev)}
							initial={{ display: 'none' }}
							animate={
								menuOpened
									? { display: 'block' }
									: {
											display: 'none',
											transition: { delay: 0.6 },
									  }
							}
							className='hamburger-menu-close'>
							<UpArrow ease={ease} />
						</motion.div>
					</motion.nav>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Header);

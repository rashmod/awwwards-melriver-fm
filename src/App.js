import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Header from './components/Header';
import Navigation from './components/Navigation';
import { NavContext } from './context/nav-context';
import { Case1, Case2, Case3 } from './pages/Case';
import Home from './pages/Home';
// styles
import './styles/App.scss';

const cases = [
	{ component: Case1, path: 'curology-min' },
	{ component: Case2, path: 'yourspace-min' },
	{ component: Case3, path: 'lumin-min' },
];

const appVariant = {
	animateOpen: {
		y: '50vh',
	},
	animateClose: {
		y: 0,
	},
};

const transitionEase = [0.78, 0, 0.36, 1];

function App() {
	const { menuOpened } = useContext(NavContext);

	return (
		<AnimateSharedLayout type='crossfade'>
			<AnimatePresence>
				<Header ease={transitionEase} />
				<motion.div
					className='App'
					variants={appVariant}
					animate={menuOpened ? 'animateOpen' : 'animateClose'}
					transition={{ duration: 1, ease: transitionEase }}>
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>

						{cases.map(({ path, component }) => (
							<Route
								key={path}
								path={`/${path}`}
								component={component}
							/>
						))}
					</Switch>
				</motion.div>
				<Navigation />
			</AnimatePresence>
		</AnimateSharedLayout>
	);
}

export default App;

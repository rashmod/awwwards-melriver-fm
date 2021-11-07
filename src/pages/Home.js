import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Cases from '../components/Cases';
import IntroOverlay from '../components/IntroOverlay';

const Home = () => {
	const [animationComplete, setAnimationComplete] = useState(false);

	const completeAnimation = () => {
		setAnimationComplete(true);
	};

	const useIntro = () => {
		const storage = window.localStorage;
		const currTimestamp = Date.now();
		const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

		// const timeLimit = 3 * 60 * 60 * 1000; // 3 hours
		const timeLimit = 10 * 60 * 1000; // 10 minute

		const hasTimePassed = currTimestamp - timestamp > timeLimit;

		useEffect(() => {
			hasTimePassed
				? storage.setItem('timestamp', currTimestamp.toString())
				: storage.setItem('timestamp', timestamp.toString());
		}, []);

		return hasTimePassed;
	};

	const showAnimation = useIntro();

	return (
		<>
			{showAnimation && !animationComplete && (
				<IntroOverlay onAnimationComplete={completeAnimation} />
			)}
			<Banner showAnimation={showAnimation} />
			<Cases />
		</>
	);
};

export default Home;

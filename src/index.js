import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { NavProvider } from './context/nav-context';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<NavProvider>
				<App />
			</NavProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

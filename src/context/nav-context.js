import React, { createContext, useState } from 'react';

export const NavContext = createContext();

export const NavProvider = (props) => {
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<NavContext.Provider value={{ menuOpened, setMenuOpened }}>
			{props.children}
		</NavContext.Provider>
	);
};

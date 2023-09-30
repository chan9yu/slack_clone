import { Suspense } from 'react';

import { Router } from './router';
import { GlobalStyle } from './styles';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Suspense>
				<Router />
			</Suspense>
		</>
	);
};

export default App;

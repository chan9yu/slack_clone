import { ThemeProvider } from '@emotion/react';
import { Suspense } from 'react';

import { Router } from './router';
import { GlobalStyle, theme } from './styles';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Suspense>
				<Router />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;

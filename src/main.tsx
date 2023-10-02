import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('root element not found');
}

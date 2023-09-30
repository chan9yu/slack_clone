import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/test/',
	server: {
		host: 'localhost',
		port: 3035
	}
});

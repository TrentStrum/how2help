import { setDefaultResultOrder } from 'dns';
import * as path from 'path';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

setDefaultResultOrder('verbatim');

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'VITE_');

	env.NODE_ENV = mode;

	// load the Vite `import.meta` values into `process.env`
	const envWithProcessPrefix = {
		'process.env': `${JSON.stringify(env)}`,
	};

	return {
		plugins: [react()],
		resolve: {
			alias: {
				/*
				TODO: These paths aren't all correct
					these aliases also have to be added/updated in `tsconfig.json`
				 	and (if you have one--you currently don't) `jest.config.ts`
					This is to show you how to set them up for your project so you can write
					something like: 
						import { LoginInput } from '@features/login-cover/LoginForm'

					instead of: 
						import { LoginInput } from '../../../../../features/login-cover/LoginForm'
				 */
				'@api': path.resolve(__dirname, './src/app/api'),
				'@api-utils': path.resolve(__dirname, './src/app/api/utils'),
				'@app': path.resolve(__dirname, './src/app'),
				'@assets': path.resolve(__dirname, './src/assets'),
				'@components': path.resolve(__dirname, './src/app/components'),
				'@features': path.resolve(__dirname, './src/app/features'),
				// '@jest-utils': path.resolve(__dirname, './jest/utils'),
				'@hooks': path.resolve(__dirname, './src/hooks'),
				'@lib': path.resolve(__dirname, './src/lib'),
				'@layouts': path.resolve(__dirname, './src/app/layouts'),
				'@mocks': path.resolve(__dirname, './mocks'),
				'@pages': path.resolve(__dirname, './src/app/pages'),
				'@styles': path.resolve(__dirname, './src/styles'),
				'@themes': path.resolve(__dirname, './src/lib/Themes'),
				'@utils': path.resolve(__dirname, './src/lib/utils'),
			},
		},
		define: envWithProcessPrefix,
		css: {
			modules: {
				generateScopedName: '[folder]_[local]_[hash:6]',
			},
		},
		server: {
			host: 'localhost',
			port: 3000,
		},
		build: {
			minify: 'terser',
			rollupOptions: {
				output: {
					manualChunks: {
						react: ['react', 'react-router-dom', 'react-dom'],
					},
				},
			},
		},
	};
});

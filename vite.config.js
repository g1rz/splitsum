import { defineConfig, transformWithEsbuild  } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	base: './',
	plugins: [
		{
			name: 'treat-js-files-as-jsx',
			async transform(code, id) {
				if (!id.match(/src\/.*\.js$/))  return null
		
				// Use the exposed transform from vite, instead of directly
				// transforming with esbuild
				return transformWithEsbuild(code, id, {
					loader: 'jsx',
					jsx: 'automatic',
				})
			},
		},
		react()
	],
	build: {
		outDir: './build', // Указываем, что выходная директория - build
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx', '.json'],
	},
	optimizeDeps: {
		force: true,
		esbuildOptions: {
			loader: {
				'.js': 'jsx',
			},
		},
	}
		
});
/// <reference types="vite/client" />

declare const process: {
	env: {
		NODE_ENV: string;
		VITE_BASE_URL: string;
	};
	cwd: () => string;
};


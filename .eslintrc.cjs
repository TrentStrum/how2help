module.exports = {
	root: true, // Make sure ESLint considers this the root configuration
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
	parserOptions: {
		project: './tsconfig.app.json',
		ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Enable JSX parsing
		},
	},
	ignorePatterns: ['.eslintrc.cjs'],
	env: {
		browser: true, // Enable browser global variables like window and document
		es2021: true, // Enables ES2021 syntax
		node: true, // Enables Node.js global variables
	},
	settings: {
		react: {
			version: 'detect', // Automatically detect the React version
		},
		'import/resolver': {
			'babel-module': {},
			typescript: {
				project: './tsconfig.app.json',
			},
		},
	},
	extends: [
		'react-app',
		'eslint:recommended', // Use the recommended rules from ESLint
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:prettier/recommended', // Prettier plugin that integrates Prettier into ESLint
		'plugin:react/jsx-runtime',
		'plugin:react/recommended', // Enable recommended rules for React
	],
	plugins: ['react', 'prettier', 'react-refresh', 'react-hooks'], // Add extra ESLint plugins
	rules: {
		'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
		'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React to be in scope for JSX
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Warn about unused variables, but ignore variables that start with an underscore
		'@typescript-eslint/explicit-function-return-type': 'off', // Disable requiring explicit return types on functions
		'@typescript-eslint/no-explicit-any': 'off', // Allow usage of 'any' type
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'], // Apply these rules only to TypeScript files
			rules: {
				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
				'react/prefer-stateless-function': 'error',
				'react/button-has-type': 'error',
				'react/no-unused-prop-types': 'error',
				'react/jsx-pascal-case': 'error',
				'react/jsx-no-script-url': 'error',
				'react/no-children-prop': 'error',
				'react/no-danger': 'error',
				'react/no-danger-with-children': 'error',
				'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
				'react/jsx-fragments': 'error',
				'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
				'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
				'react/jsx-max-depth': ['warn', { max: 10 }],
				'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
				'react/jsx-key': [
					'error',
					{
						checkFragmentShorthand: true,
						checkKeyMustBeforeSpread: true,
						warnOnDuplicates: true,
					},
				],
				'react/jsx-no-useless-fragment': 'warn',
				'react/jsx-curly-brace-presence': 'warn',
				'react/no-typos': 'warn',
				'react/display-name': 'warn',
				'react/self-closing-comp': 'warn',
				'react/jsx-sort-props': 'warn',
				'react/react-in-jsx-scope': 'off',
				'react/jsx-one-expression-per-line': 'off',
				'no-cond-assign': 2,
				'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
				'import/no-anonymous-default-export': 0,
				'react/forbid-prop-types': 0,
				'react/prop-types': 0,
				'react/jsx-props-no-spreading': 0,
				'jsx-a11y/click-events-have-key-events': 0,
				'jsx-a11y/no-static-element-interactions': 0,
				'jsx-a11y/label-has-associated-control': [
					'error',
					{
						required: {
							some: ['nesting', 'id'],
						},
					},
				],
				'jsx-a11y/label-has-for': 0,
				'jsx-a11y/href-no-hash': ['off'],
				'max-len': [
					'warn',
					{
						code: 100,
						tabWidth: 2,
						comments: 100,
						ignoreComments: false,
						ignoreTrailingComments: true,
						ignoreUrls: true,
						ignoreStrings: true,
						ignoreTemplateLiterals: true,
						ignoreRegExpLiterals: true,
					},
				],
				// 'css-modules/no-unused-class': [2, { camelCase: true }],
				// 'css-modules/no-undef-class': [2, { camelCase: true }],
				'import/no-import-module-exports': 0,
				'import/export': 0,
				'import/order': [
					'error',
					{
						groups: [
							'builtin', // Built-in imports (come from NodeJS native) go first
							'external', // <- External imports
							'internal', // <- Absolute imports
							['parent', 'sibling'], // <- Relative imports, the sibling and parent types they can be mingled together
							'index', // <- index imports
							'unknown', // <- unknown
						],
						pathGroups: [
							{
								pattern: './styles.module.css',
								group: 'unknown',
							},
						],
						'newlines-between': 'always',
						alphabetize: {
							// sort in ascending order. Options: ["ignore", "asc", "desc"]
							order: 'asc',
							// ignore case. Options: [true, false]
							caseInsensitive: true,
						},
					},
				],
			},
		},
	],
};

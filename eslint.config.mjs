import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{
		ignores: ['package-lock.json', 'Lessons/**'],
	},

	js.configs.recommended,

	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-var': 'warn',
			'prefer-const': 'warn',
			eqeqeq: 'warn',
		},
	},

	eslintConfigPrettier,
];

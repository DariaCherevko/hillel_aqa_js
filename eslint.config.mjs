import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	{
		ignores: [
			'package-lock.json',
			'Lessons/git_basics/**',
			'Lessons/nodeBasics/**',
			'Lessons/lesson_3/**',
			'Lessons/lesson_4/**',
			'Lessons/lesson_5/**',
			'Lessons/lesson_6/**',
			'Lessons/lesson_7/**',
			'Lessons/lesson_8/**',
			'Lessons/lesson_9/**',
			'Lessons/lesson_10/**',
			'Lessons/lesson_11/**',
			'Lessons/lesson_14/**',
		],
	},

	js.configs.recommended,

	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.node,
				...globals.jest,
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

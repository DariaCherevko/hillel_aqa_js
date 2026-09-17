export default {
	testEnvironment: 'node',
	verbose: true,
	transform: {},
	testPathIgnorePatterns: ['/node_modules/'],
	reporters: [
		'default',
		[
			'jest-html-reporter',
			{
				pageTitle: 'API Test Report',
				outputPath: 'reports/test-report.html',
				includeFailureMsg: true,
				includeConsoleLog: true,
			},
		],
	],
};

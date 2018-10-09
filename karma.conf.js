module.exports = function(config) {
	config.set({
		basepath: '',
		exclude: [],
		files: ['tests/*.js'],
		frameworks: ['jasmine'],
		browsers: ['Chrome'],
		reporters: ['spec'],
		singleRun: false,
		colors: true,
		port: 9876,
		autoWatch: true,
		logLevel: config.LOG_WARN
	});
};
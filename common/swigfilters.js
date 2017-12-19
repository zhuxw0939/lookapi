
var logger = require('./logger');


exports.myfilter = function (input) {
	logger.info("--> myfilter");
	logger.info(input);
	return input.toString().split('').reverse().join('');
};




var config = require('../common/config');
var mydebug = require("debug")("mydebug:logger.info");

var log4js = require('log4js');
log4js.configure({
	appenders: [
		{
			type: 'console' //控制台输出
		},
		{
			type: 'file', //文件输出
			filename: 'logs/mylogger.log', //文件输出
			category: 'cheese'
		}
	]
});

var logger = log4js.getLogger('cheese');
// logger.setLevel(config.debug && env !== 'test' ? 'DEBUG' : 'ERROR')
logger.setLevel('DEBUG');

if(config.debug){
	logger.info = mydebug;
}

module.exports = logger;


// 跟踪，调试，信息，警告，错误的，致命的
// logger.trace("Cache set common express");
// logger.debug("Cache set common express", ("zxw").greenBG);
// logger.info("Cache set common express");
// logger.warn("Cache set common express");
// logger.error("Cache set common express");
// logger.fatal("Cache set common express");
//
// var t = new Date();
// for(var i=0; i<1000; i++){
// 	// do something
// }
// var duration = (new Date() - t);
// logger.info("Render view", "view", ("(" + duration + "ms)").green);

/* npm install colors */

// text colors
// black
// red
// green
// yellow
// blue
// magenta
// cyan
// white
// gray
// grey

// background colors
// bgBlack
// bgRed
// bgGreen
// bgYellow
// bgBlue
// bgMagenta
// bgCyan
// bgWhite

// styles
// reset
// bold
// dim
// italic
// underline
// inverse
// hidden
// strikethrough

// extras
// rainbow
// zebra
// america
// trap
// random


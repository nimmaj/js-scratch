const moment = require('moment');

var debugLogging = false;
var logDiscrim = 'lp';

// dLog('some','arguments','that','console.log','takes')
// only actually logs if debugLogging is set to true
function dLog() {
  if (debugLogging) {
    pLog.apply(this, arguments);
  }
}

// pLog('some','arguments','that','console.log','takes')
function pLog() {
  var args = Array.prototype.slice.call(arguments, pLog.length);
  console.log(moment().format('YYYY-MM-DD HH:mm:ss.SSS'), logDiscrim, ':', ...args);
}

module.exports = {
  debugLogging: debugLogging,
  logDiscrim: logDiscrim,
  dLog: dLog,
  pLog: pLog
};

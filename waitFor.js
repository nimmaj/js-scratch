const Promise = require('bluebird');
const log = require('./waitFor.js');

var checkInterval = 1000;

function waitFor(something, somethingCheck) {
  return new Promise(function(resolve, reject) {
    var timer = setInterval(resolveIfCheckCompletes, checkInterval);
    resolveIfCheckCompletes();

    function resolveIfCheckCompletes() {
      if(somethingCheck()) {
        log.pLog(something,'succeeded - clearing timer');
        clearInterval(timer);
        resolve();
      } else {
        log.pLog('waiting for', something, '- will retry in a few seconds');
      }
    }
  });
}

module.exports = {
  checkInterval: checkInterval,
  waitFor: waitFor
};

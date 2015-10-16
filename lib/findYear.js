'use strict';

module.exports = function() {
  var oldeYear = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
  return {year: oldeYear};
};

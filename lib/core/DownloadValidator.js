var _ = require('underscore');
var e = require('../Exceptions');
var fs = require('fs')
var DownloadValidator = function(fd, threads) {
  this.fd = fd;
	this.threads = threads;
};

DownloadValidator.prototype.execute = function(callback) {
	var isCompleted = _.some(this.threads, function(item) {
		return item.position >= item.end;
	});
	if (isCompleted === true) {
    fs.closeAsync(this.fd)
    callback(null, true);
  }
	else callback(e(1013));
};

module.exports = DownloadValidator;

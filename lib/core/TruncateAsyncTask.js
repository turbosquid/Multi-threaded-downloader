var fs = require('fs');

var task = function(fd, fileSize) {
	this.fd = fd;
	this.fileSize = fileSize;
	
};
var _execute = function(callback) {
	
	this.callback = callback;
	var self = this;
  //support older versions of node
  if (fs.ftruncate) {
    fs.ftruncate(this.fd, this.fileSize, self.callback);
  }
  else {
    fs.truncate(this.fd, this.fileSize, self.callback);
  }
	//this.callback();
};


task.prototype.execute = _execute;

module.exports = task;

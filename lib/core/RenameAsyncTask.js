var fs = require('fs.extra');

var task = function(oldName, newName) {
	this.oldPath = oldName;
	this.newPath = newName;
};
task.prototype.execute = function(callback) {
	this.callback = callback;
	fs.copy(this.oldPath, this.newPath, this.callback);
};

module.exports = task;

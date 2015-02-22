// Used in place of a real back-end service, we simply load from the filesystem
var fs = require('fs');

function fileToJson(fileName) {
	return JSON.parse(fs.readFileSync(__dirname + "/" + fileName, 'utf8'));
}

function getTestimonials() {
  return fileToJson('../data/accounts.json');
}

function getContracts() {
  return fileToJson('../data/contracts.json');
}

module.exports.getTestimonials = getTestimonials;
module.exports.getContracts = getContracts;

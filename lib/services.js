// Used in place of a real back-end service, we simply load from the filesystem
var fs = require('fs'),
	_ = require('lodash');

function fileToJson(fileName) {
	return JSON.parse(fs.readFileSync(__dirname + "/" + fileName, 'utf8'));
}

function getTestimonials() {
  return fileToJson('../data/accounts.json');
}

function getContract(id) {
  var contracts = fileToJson('../data/contracts.json');
  var contract = _.find(contracts, _.matchesProperty('id', id));

  if(contract === undefined) {
  	contract = {};
  }
  return contract;
}

module.exports.getTestimonials = getTestimonials;
module.exports.getContract = getContract;

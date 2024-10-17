const PatientDataStorage = artifacts.require("PatientDataStorage");
 
module.exports = function (deployer) {
  deployer.deploy(PatientDataStorage);
};
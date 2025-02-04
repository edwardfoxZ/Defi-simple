const MyDefi = artifacts.require("myDefi");

module.exports = function (deployer) {
  deployer.deploy(MyDefi);
};

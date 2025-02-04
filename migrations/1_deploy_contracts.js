const DaiMock = artifacts.require("Dai");
const MyDefi = artifacts.require("MyDefi");

module.exports = async function (deployer, _network, accounts) {
  // Deploy DaiMock contract
  await deployer.deploy(DaiMock);
  const dai = await DaiMock.deployed();

  await deployer.deploy(MyDefi, dai.address);

  const myDefi = await MyDefi.deployed();
  await dai.faucet(myDefi.address, 100);
  await myDefi.investing(accounts[1], 100);

  const balanceOfcontract = await dai.balanceOf(myDefi.address);
  const balanceOfrecipient = await dai.balanceOf(accounts[1]);

  console.log(balanceOfcontract.toString());
  console.log(balanceOfrecipient.toString());
};

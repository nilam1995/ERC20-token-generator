const { ethers } = require("ethers")
const hre = require("hardhat")

const tokens = (_number) => {
  return ethers.utils.parseUnits(_number.toString(), "ether");
};

async function main(){
  //ERC20Generator
  const _tokenName = "Nilam Sawant";
  const _tokenSymbol = "NS";
  const _initialSupply = tokens(1000);
  const ERC20Generator = await hre.ethers.getContractFactory("ERC20Generator");
  const erc20Generator =await ERC20Generator.deploy(
    _initialSupply,
    _tokenName,
    _tokenSymbol,
  );
  await erc20Generator.deployed();
  console.log("erc20Generator: "+erc20Generator.address);

  //LookUpContract
  const LookUpContract = await hre.ethers.getContractFactory("LookUpContract");
  const lookupContract = await LookUpContract.deploy();

  await lookupContract.deployed();
  console.log("LookupContract:"+lookupContract.address);
}

main().catch((error) =>{
  console.log(error);
  process.exitCode = 1;
})
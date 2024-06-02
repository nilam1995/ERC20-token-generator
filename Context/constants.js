import ERC20Generator from "./ERC20Generator.json";
import LookUpContract from "./LookUpContract.json";

export const ERC20Generator_ABI = ERC20Generator.abi;
export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;
export const ERC20Generator_ADDRESS = process.env.NEXT_PUBLIC_ERC20GENERATOR_ADDRESS;

export const LookUpContract_ABI = LookUpContract.abi;
export const LookUpContract_ADDRESS = process.env.NEXT_PUBLIC_LOOKUPCONTRACT_ADDRESS;
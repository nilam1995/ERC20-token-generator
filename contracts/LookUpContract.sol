//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract LookUpContract{

  struct ERC20Token{
    uint256 tokenID;
    address owner;
    string tokenSupply;
    string tokenName;
    string tokenSymbol;
    string tokenAddress;
    string tokenTransactionHash;
    string tokenCreatedDate;
  }

  struct Donation{
    uint256 donationID;
    address donor;
    uint256 fund;
  }

  address payable contractOwner = payable(0xFD15A4a38766Db902B656Cea2F748Dc7F037B5aa);
  
  uint256 public listingPrice = 0.025 ether;
  mapping(uint256 => ERC20Token) private erc20Tokens;
  mapping(uint256 => Donation) private donations;
  uint256 public _tokenIndex;
  uint256 public _donationIndex;

  event DonationReceived(address indexed donor, uint256 amount);
  event ERC20TokenListed(uint256 indexed id, address indexed owner, string indexed token);

  modifier onlyOwner(){
    require(
      msg.sender == contractOwner,
      "Only owner of the contract can change the listing price"
    );
    _;
  }

  function createERC20Token(address _owner, string memory _tokenSupply, string memory _tokenName, string memory _tokenSymbol, string memory _tokenAddress, string memory _tokenTransactionHash, string memory _tokenCreatedData) payable external returns(uint256, address, string memory, string memory, string memory, string memory){
    _tokenIndex++;
    uint256 _tokenId = _tokenIndex;
    ERC20Token storage erc20Token = erc20Tokens[_tokenId];

    erc20Token.tokenID = _tokenId;
    erc20Token.owner = _owner;
    erc20Token.tokenSupply = _tokenSupply;
    erc20Token.tokenName = _tokenName;
    erc20Token.tokenSymbol = _tokenSymbol;
    erc20Token.tokenAddress = _tokenAddress;
    erc20Token.tokenTransactionHash = _tokenTransactionHash;
    erc20Token.tokenCreatedDate = _tokenCreatedData;

    emit ERC20TokenListed(_tokenId,_owner,_tokenAddress);
    return(_tokenId,_owner,_tokenAddress,_tokenName,_tokenSymbol, _tokenAddress);
  }

  function getAllERC20TokenListed() public view returns(ERC20Token[] memory){
    uint256 itemcount = _tokenIndex;
    uint256 currentIndex = 0;

    ERC20Token[] memory items = new ERC20Token[](itemcount);
    for(uint256 i=0; i<itemcount; i++){
      uint256 currentId = i+1;
      ERC20Token storage currentItem = erc20Tokens[currentId];
      items[currentIndex] = currentItem;
      currentIndex +=1;
    }

    return items;

  }

  function getERC20Token(uint256 _tokenID) external view returns(
    uint256,
    address,
    string memory,
    string memory,
    string memory,
    string memory,
    string memory,
    string memory
  ){
    ERC20Token memory erc20Token = erc20Tokens[_tokenID];
    return(
      erc20Token.tokenID,
      erc20Token.owner,
      erc20Token.tokenSupply,
      erc20Token.tokenName,
      erc20Token.tokenSymbol,
      erc20Token.tokenAddress,
      erc20Token.tokenTransactionHash,
      erc20Token.tokenCreatedDate
    );
  }

  function getUserERC20Tokens(address _user) external view returns(ERC20Token[] memory){
    uint256 totalItemCount = _tokenIndex;
    uint256 itemcount = 0;
    uint256 currentIndex = 0;

    for(uint256 i=0; i<totalItemCount; i++){
      if(erc20Tokens[i+1].owner == _user){
        itemcount +=1;
      }
    }

    ERC20Token[] memory items =new ERC20Token[](itemcount);
    for(uint256 i=0; i<totalItemCount; i++){
      if(erc20Tokens[i+1].owner == _user){
        uint256 currentId = i+1;
        ERC20Token storage currentItem = erc20Tokens[currentId];
        items[currentIndex] = currentItem;
        currentIndex +=1;
      }
    }

    return items;
  }

  function getERC20TokenListingPrice() public view returns (uint256){
    return listingPrice;
  }

  function updateListingPrice(uint256 _listingPrice, address owner) public payable onlyOwner{
    require(contractOwner == owner,
    "Only contract owner can update listing price");
    listingPrice = _listingPrice;
  }

  function withdraw() external onlyOwner{
    uint256 balance = address(this).balance;
    require(balance >0, "No donations available for withdrawal");
    payable(contractOwner).transfer(balance);
  }

  function getContractBalance() external view onlyOwner returns(uint256){
    uint256 balance = address(this).balance;
    return balance;
  }

  function donate() external payable{
    require(msg.value > 0, "Donation amount must be greater than zero");
      _donationIndex++;
      uint256 _donationID =_donationIndex;
      Donation storage donation = donations[_donationID];

      donation.donationID = _donationID;
      donation.donor = msg.sender;
      donation.fund = msg.value;

      emit DonationReceived(msg.sender, msg.value);
  }

  function getDonations() public view returns(Donation[] memory){
    uint256 itemcount = _donationIndex;
    uint256 currentIndex = 0;

    Donation[] memory items = new Donation[](itemcount);
    for(uint256 i =0; i<itemcount; i++){
      uint256 currentId = i+1;
      Donation storage currentItem = donations[currentId];
      items[currentIndex] = currentItem;
      currentIndex += 1;
    }

    return items;

  }

}

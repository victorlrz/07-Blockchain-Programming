pragma solidity ^0.6.0;

import "./ERC721.sol";

contract MyContract is ERC721{
    address payable private contractOwner;
    uint public animalCount = 0;
    string public tokenName = "VBL";

    struct animal{
        string race;
        uint256 age;
        string ville;
        string color;
        string name;
    }

    event addBreeder (address breeder);
    mapping(address => bool) public allowedBreeder;

    animal[] private animalArray;
    address[] private breederArray;

    constructor() public{
        contractOwner = msg.sender;
    }
    modifier ownerOfContract(){
        require(msg.sender == contractOwner,"Must be the owner of the contract");
        _;
    }
    
    function registerBreeder(address breeder) public ownerOfContract {
        breederArray.push(breeder);
        allowedBreeder[breeder] = true;
        emit addBreeder(breeder);
    }

    function isRegistered(address breeder) public view returns(bool){
        return allowedBreeder[breeder];
    }

    function AnimalInformation(uint256 animalID) public view returns(string memory race,
        uint256 age,
        string memory ville,
        string memory color,
        string memory name)
        {
        return(animalArray[animalID].race,animalArray[animalID].age,animalArray[animalID].ville,
        animalArray[animalID].color,animalArray[animalID].name);
    }

    function declareAnimal(string memory race, uint256 age, string memory ville,string memory color, string memory name) public {
        require(isRegistered(msg.sender) == true, "You'r not allowed to declare your animal");
        animalArray.push(animal(race, age, ville, color, name));
        animalCount++;
        //animalArray[animalCount] = animal(race, age, ville, color, name);
        _mint(msg.sender, (animalArray.length-1));
    }

    function _balanceOf(address breeder) public view returns (uint256) {
        return balanceOf(breeder);
    }

    function _ownerOf(uint256 tokenId) public view returns (address){
        ownerOf(tokenId);
    }

}
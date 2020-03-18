const MyContract = artifacts.require("MyContract.sol");



var accounts= web3.eth.getAccounts()

contract("MyContract",async (accounts)=>{
    
   
        it('deploys successfully', async () => {
        const address = await MyContract.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
        })

        it("Should check if the owner of the contract is in the allowedBreeder list",async ()=>
        {
            let instance = await MyContract.deployed();
            instance.registerBreeder("0x4E2C75B5110D8E8c85b67AcD2E602e78Ec3fEcBe") ; //Account to send txs from (default: accounts[0])
            let found = await instance.allowedBreeder("0x4E2C75B5110D8E8c85b67AcD2E602e78Ec3fEcBe"); 
            assert.equal(true, found);     
        });

        it("Should check if a random breeder is in the allowedBreeder list",async ()=>
        {
            let instance = await MyContract.deployed();
            let found = await instance.allowedBreeder("0x42fDD3E223F12b0E3708dAA39197dAb3c635750e"); //Ganache account[1]
            assert.equal(false, found);     
        });

        it("Should add and check if the previous breeder is in the allowedBreeder list",async ()=>
        {
            let instance = await MyContract.deployed();
            instance.registerBreeder("0x42fDD3E223F12b0E3708dAA39197dAb3c635750e") ; //Ganache account[1]
            let found = await instance.allowedBreeder("0x42fDD3E223F12b0E3708dAA39197dAb3c635750e"); 
            assert.equal(true, found);     
        });

        it("Should create an animal and I should be the owner",async()=>{
            let instance = await MyContract.deployed();
            let result = await instance.declareAnimal("huskie", 2, "paris","beige clair", "Dao");
            let id =  await result.logs[0].args[2];
            let address =await instance.ownerOf(id);
            assert.equal("0x4E2C75B5110D8E8c85b67AcD2E602e78Ec3fEcBe", address);
        })
})

import React, { Component } from "react";
import Web3 from "web3";
import {MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS} from '../config'

class MainPage extends Component{
    UNSAFE_componentWillMount(){
        this.loadBlockchainData()
      }
    
      async loadBlockchainData(){
        const web3 = new Web3(Web3.givenProvider || "http://127.0.0.:7545")
        const network = await web3.eth.net.getNetworkType()
        const blockNumber = await web3.eth.getBlockNumber()
        const chainID = await web3.eth.getChainId()
        //this.setState("network :", network)
        console.log("Network :", network)
        console.log("Last block number :", blockNumber)
        console.log("Chain ID :", chainID)
        this.setState({ network : network})
        this.setState({ blockNumber : blockNumber})
        this.setState({ chainID : chainID})
        const myContract = new web3.eth.Contract(MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS)
        this.setState({ myContract })
        const tokenCount = await myContract.methods.animalCount().call()
        this.setState({tokenCount})
        console.log(tokenCount)
        const name = await myContract.methods.tokenName().call()
        console.log(name)
        this.setState({name})
      
        //Fetch account
      }
      constructor(props){
        super(props)
        this.state = { 
          network : "",
          blockNumber : "",
          chainID : "",
          tokenCount : 0,
          name : ""
          
        }   
      }
      render(){
            return (
                <div className = "Container">
                    <h1>TD07 Blockchain Programming !</h1>
                    <p>Your network : {this.state.network} <br></br> 
                    Chain ID : {this.state.chainID} <br></br>
                    Last block number : {this.state.blockNumber} <br></br>
                    tokenCount : {this.state.tokenCount} <br></br>
                    Token registry name : {this.state.name}
                    </p>
                </div>
                );
        }    
}

export default MainPage;
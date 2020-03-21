import React, { Component } from "react";
import Web3 from "web3";
import {MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS} from '../config'

class tokenNumber extends Component{
  
 
  UNSAFE_componentWillMount(userAddr){
    this.loadBlockchainData(userAddr)
  }

  async loadBlockchainData(userAddr){
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.:7545")
    const myContract = new web3.eth.Contract(MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS)
    myContract.deploy()
    this.setState({ myContract })
    if(userAddr > 0){
      web3.eth._balanceOf(userAddr).call().then(console.log)
    }
    
    const tokenCount = await myContract.methods.animalCount().call()
    console.log(tokenCount)
    const name = await myContract.methods.tokenName().call()
    console.log(name)
    
  
    //Fetch account
  }

  constructor(props){
    super(props)
    this.state = { 
      address : '',
      balanceOf : 0
     }  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({address: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Un essai a été envoyé : ' + this.state.address);
    this.UNSAFE_componentWillMount(this.state.address)
    event.preventDefault();
  }

    
  render(){
      return (
          <div className = "Container">
              <h1>TD07 Blockchain Programming !</h1>
                  <form onSubmit={this.handleSubmit} >
                    <label>
                      Address :
                      <input
                        type="text"
                        value = {this.state.address} 
                        onChange={this.handleChange} />
                    </label>
                  <input type="submit" value="Envoyer" />
                </form>
                <p> The address : {this.state.address } <br></br>  owns : { this.state.balanceOf } tokens</p>
          </div>
          );
  }    
}


export default tokenNumber;
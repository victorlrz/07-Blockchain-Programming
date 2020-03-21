import React, { Component } from "react";
import Web3 from "web3";
import {MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS} from '../config'

class ownerOf extends Component{
  
 
  UNSAFE_componentWillMount(tokenID){
    this.loadBlockchainData(tokenID)
  }

  async loadBlockchainData(tokenID){
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.:7545")
    const myContract = new web3.eth.Contract(MY_CONTRACT_ABI, MY_CONTRACT_ADDRESS)
    myContract.deploy()
    this.setState({ myContract })
    if(tokenID > -1){
      const address = web3.eth._ownerOf(tokenID).call()
      this.setState({address})
    }
   
    
    //Fetch account
  }

  constructor(props){
    super(props)
    this.state = { 
      tokenID : 0,
      address : ''
     }  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange = (event) => {
    this.setState({tokenID: event.target.value});
  }

  handleSubmit = (event) => {
    alert('Un essai a été envoyé : ' + this.state.tokenID);
    this.UNSAFE_componentWillMount(this.state.tokenID)
    event.preventDefault();
  }

    
  render(){
      return (
          <div className = "Container">
              <h1>TD07 Blockchain Programming !</h1>
                  <form onSubmit={this.handleSubmit} >
                    <label>
                      Token ID :
                      <input
                        type="text"
                        value = {this.state.tokenID} 
                        onChange={this.handleChange} />
                    </label>
                  <input type="submit" value="Envoyer" />
                </form>
                <p> The token ID : {this.state.tokenID } <br></br>  belongs to : { this.state.address } </p>
          </div>
          );
  }    
}


export default ownerOf;
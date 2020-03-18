import React, { Component } from 'react';
import './App.css';
import Web3 from "web3";
import { HelpBlock } from 'react-bootstrap';

class App extends Component {
  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.:7545")
    const network = await web3.eth.net.getNetworkType()
    const accounts = await web3.eth.getBlockNumber().then(console.log)
    this.setState({network: network})
    //this.setState({account: account[0]})

    //Fetch account
  }
  constructor(props){
    super(props)
    this.state = { network: ""}
    
  }

  render(){
    return (
      <div className="Container">
        <h1>Hello world !</h1>
        <p>Your network: {this.state.network} </p>
      </div>
    );
  }
}

export default App;

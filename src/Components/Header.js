import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name : 'name',
      age : 12
    };
    this.setStateName = this.setStateName.bind(this)
  }
  
  setStateName(){
    this.setState({
      name: 'Hoa',
      age: 15
    })
  }
  
  render() {
    return (
      <div>
        Header
      <p>{this.props?.nameProps}</p>
      <p>{this.state?.name}</p>
      <p>{this.state?.age}</p>
      <button onClick={()=> this.setStateName ()}>Change Name</button>
      </div>
    )
  }
}

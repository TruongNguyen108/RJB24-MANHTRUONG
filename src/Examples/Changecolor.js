import React, { Component } from 'react'

export default class Changecolor extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'Black'
        };
        this.setStateColor = this.setStateColor.bind(this)
    }
    setStateColor(){
        this.setState ({
            color: 'Red'
        })
    }
    setStateColor1(){
        this.setState({
            color: 'Black'
        })
    }
  render() {
    return (
      <div>
        <p>{this.state?.color}</p>
      <button onClick={()=> this.setStateColor ()}>Change Red</button>
      <button onClick={()=> this.setStateColor1 ()}>Change Black</button>
      </div>
    )
  }
}

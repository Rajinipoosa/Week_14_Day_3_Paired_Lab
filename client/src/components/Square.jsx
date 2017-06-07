import React from 'react';

class Square extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render(){
    return(
      <div className="square-div" onClick={() => { this.handleClick()} }> {this.props.value} </div>
    )
  }
  handleClick(){
    this.props.handleTurn(this.props.index);
  }
}

export default Square;
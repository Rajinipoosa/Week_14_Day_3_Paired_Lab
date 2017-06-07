import React from 'react';
import BoardContainer from './BoardContainer.jsx'

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      turn: "X",
      winStatus: false,
      board: ["", "", "",
              "", "", "",
              "", "", ""]
    };
    this.handleTurn = this.handleTurn.bind(this)
  }
  render(){
    if(!this.state.winStatus){
      return (<BoardContainer board={this.state.board} handleTurn={this.handleTurn}></BoardContainer>)
    }
    if(this.state.winStatus === "draw"){
      return(
        <div className ="winner"> Draw </div>
      )
    }
    return(
      <div className ="winner"> {this.state.winStatus} Wins </div>
    )
  }
  handleTurn(value){
    if(this.state.board[value]) return;
    this.state.board[value] = this.state.turn;

    if(this.state.turn === "X") {
      this.state.turn = "O";
    }else {
      this.state.turn = "X";
    }

    this.setState({
      board: this.state.board,
      turn: this.state.turn

    });
    this.winChecker();

    // if(this.state.turn === 0){
    //   const oBoard = this.state.oBoard;
    //   const newOBoard = oBoard.concat([value])
    //   this.setState({oBoard: newOBoard})
    //   this.setState({turn: 1})
    // }
    // if(this.state.turn === 1){
    //   this.setState({turn: 0})
    // }
  }
  addToBoard(){
    this.setState()
  }
  winChecker(){
    if(this.state.board[0] === this.state.board[1] && this.state.board[0] === this.state.board[2] && this.state.board[2] !== "")
    {
      this.setState({winStatus: this.state.board[0]})
    }
    if(this.state.board[3] === this.state.board[4] && this.state.board[3]===this.state.board[5] && this.state.board[5] !== "" )
    {
      this.setState({winStatus: this.state.board[3]})
    }
    if(this.state.board[6] === this.state.board[7] && this.state.board[6]===this.state.board[8] && this.state.board[8] !== "")
    {
      this.setState({winStatus: this.state.board[6]})
    }
    if(this.state.board[0] === this.state.board[3] && this.state.board[0]===this.state.board[6] && this.state.board[6] !== "")
    {
      this.setState({winStatus: this.state.board[0]})
    }
    if(this.state.board[1] === this.state.board[4] && this.state.board[1]===this.state.board[7] && this.state.board[7] !== "")
    {
      this.setState({winStatus: this.state.board[1]})
    }
    if(this.state.board[2] === this.state.board[5] && this.state.board[2]===this.state.board[8] && this.state.board[8] !== "")
    {
      this.setState({winStatus: this.state.board[2]})
    }
    if(this.state.board[0] === this.state.board[4] && this.state.board[0] === this.state.board[8] && this.state.board[4] !== "")
    {
      this.setState({winStatus: this.state.board[0]})
    }
   if(this.state.board[2] === this.state.board[4] && this.state.board[2]===this.state.board[6] && this.state.board[6] !== "")
   {
     this.setState({winStatus: this.state.board[2]})
   }
   if(!this.state.board.includes("")){
      this.setState({winStatus: "draw"})
     }


  }
}

export default Game;
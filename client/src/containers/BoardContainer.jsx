import React from 'react';
import Square from '../components/Square.jsx'

class BoardContainer extends React.Component {
 constructor(props){
  super(props);
 }
 render(){

  let rows = [];
  let index = 0;

  /*
    <tr>
      <td><Square value={this.props.board[0]} index={0} handleTurn={this.props.handleTurn}></Square></td>
      <td><Square value={this.props.board[1]} index={1} handleTurn={this.props.handleTurn}></Square></td>
      <td><Square value={this.props.board[2]} index={2} handleTurn={this.props.handleTurn}></Square></td>
    </tr>
    <tr>
      <td><Square value={this.props.board[3]} index={3} handleTurn={this.props.handleTurn}></Square></td>
      <td><Square value={this.props.board[4]} index={4} handleTurn={this.props.handleTurn}></Square></td>
      <td><Square value={this.props.board[5]} index={5} handleTurn={this.props.handleTurn}></Square></td>
    </tr>
    <tr>
      <td><Square value={this.props.board[6]} index={6} handleTurn={this.props.handleTurn}></Square></td>
      <td><Square value={this.props.board[7]} index={7} handleTurn={this.props.handleTurn}></Square></td>
      <td><Square value={this.props.board[8]} index={8} handleTurn={this.props.handleTurn}></Square></td>       
    </tr>
  */

  /*  
    this.props.board.map((item) => {
      return <Square className="flex" value={this.props.board[index]} index={index} handleTurn={this.props.handleTurn}></Square>
    });
  */

  for(let i = 0 ; i < 3; i++) {

    let td = [];
    for(let k=0; k<3; k++) {
      td.push(<td><Square value={this.props.board[index]} index={index} handleTurn={this.props.handleTurn}></Square></td>)
      index++;
    }

    rows.push(<tr>{td}</tr>);
  }

   return(
     <div className="board">
       <table>
         {rows}
       </table>

     </div>
   )
 } 
}


export default BoardContainer;
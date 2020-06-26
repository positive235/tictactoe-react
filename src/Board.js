import React from 'react';
import Square from './Square';

class Board extends React.Component {
  renderSquare(i) {
    if (this.props.currentItem === i) {
      return (
        <Square
          value={<div className="current-square">{this.props.squares[i]}</div>}
          onClick={() => this.props.onClick(i)}
        />
      );
    } 
    return (
      <Square 
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  
  render() {    
    return (
      <div>
        {
          [0, 3, 6].map(num => (
            <div className="board-row">
              {
                Array(3).fill().map(
                  (_, index) => this.renderSquare(index + num)
                )
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Board;
  
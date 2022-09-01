import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";
import { trueOrFalse } from "./utils";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 5, ncols = 5, chanceLightStartsOn=0.5 }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    initialBoard = Array.from({length: nrows}).map(
      row => Array.from({length: ncols}).map(
          cell => Math.random() < chanceLightStartsOn
      )
  );
    console.log("initial board",initialBoard)
    return initialBoard;
  }

  /** iterates over initalBoard and checks for false values
   * returns true/false  */
  function hasWon() {
    // let won;

    // for (let row of initialBoard){
    //   won = row.includes(false)
    //   }
    }



  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const deepCopy = [...board]
      // const deepCopy = board.map(b => [...b])

      // TODO: in the copy, flip this cell and the cells around it
      setBoard(deepCopy => {

        //get the cell
        //find the surrounding cells
        //switch true/false

      })

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  function generateHtmlTable(){
    let htmlBoard = []
    for (let y = 0; y < nrows; y++){
      let row = []
      for(let x = 0; x < ncols; x++){
        row.push(<Cell flipCellsAroundMe={0} isLit={board[y][x]}/>)
      }
      htmlBoard.push(<tr>{row}</tr>)
    }
    return htmlBoard
  }
  return (
  <table border="1px">
    <tbody>
      {generateHtmlTable()}
    </tbody>
  </table>
  )

  // TODO
}

export default Board;

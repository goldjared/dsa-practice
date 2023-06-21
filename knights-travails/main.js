function game() {
  function board(row, boardArray = []) {
    if (row === 9) {
      return boardArray;
    }
    for (let i = 1; i < 9; i++) {
      boardArray.push([row, i]);
    }
    return board(row + 1, boardArray);
  }

  function knight() {
    let move = (currentPos, targetPos) => {
      let colValue = 0;
      let rowValue = 0;
      if (currentPos[0] < targetPos[0]) {
        colValue = targetPos[0] - currentPos[0];
      } else {
        colValue = currentPos[0] - targetPos[0];
      }
      if (currentPos[1] < targetPos[1]) {
        rowValue = targetPos[1] - currentPos[1];
      } else {
        rowValue = currentPos[1] - targetPos[1];
      }
      console.log(colValue, rowValue, "col, row");
      if (
        colValue < 1 ||
        colValue > 2 ||
        rowValue < 1 ||
        rowValue > 2 ||
        colValue != rowValue
      ) {
        return false;
      } else {
        currentPos = targetPos;
        return true;
      }
    };

    return { move };
  }
  return { board, knight };
}
let chessBoard = game().board(1);
let myKnight = game().knight();
console.log(chessBoard.length);
// console.log(myKnight);
console.log(myKnight.move([8, 6], [3, 6]));

/*
  knightMOve(current, target)
    make graph of all possible knight moves. 
    once it graphs target, find shortest edges to target. this is result
  output array of arrays, which are move required from current to target
*/

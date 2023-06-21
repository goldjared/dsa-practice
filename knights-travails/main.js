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
    const screenArray = currentPos.concat(targetPos);
    let screenArrayResult;
    screenArray.forEach((pos) => {
      if (pos < 1 || pos > 8) {
        screenArrayResult = false;
      }
    });
    if (screenArrayResult === false) return false;

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
      colValue === rowValue
    ) {
      return false;
    } else {
      currentPos = targetPos;
      return true;
    }
  };

  return { move };
}
let chessBoard = board(1);
let myKnight = knight();
console.log(chessBoard.length);
// console.log(myKnight);
console.log(myKnight.move([2, -1], [3, 1]));

/*
  knightMOve(current, target)
    make graph of all possible knight moves. 
    once it graphs target, find shortest edges to target. this is result
  output array of arrays, which are move required from current to target
*/

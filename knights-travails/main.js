function game() {
  function board(row, boardArray = []) {
    if(row === 9) {
      return boardArray;
    }
    for(let i = 1; i < 9; i++) {
      boardArray.push([row, i])
    }
    return board(row + 1, boardArray);

  }

  function knight() {
    let move = () => {

    }
  }
  // return board
}
let chessBoard = board(1)
console.log(chessBoard.length);
console.log(chessBoard);
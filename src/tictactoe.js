function checkWinner(board) {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const [a, b, c] of wins) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  if (board.every(Boolean)) return 'D';
  return null;
}

function updateTurn(el, turn) {
  el.textContent = turn;
}

function updateMessage(el, text) {
  el.textContent = text;
}

module.exports = { checkWinner, updateTurn, updateMessage };

// Create a 2D array to represent the chessboard
let board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
  for (let j = 0; j < 8; j++) {
    board[i][j] = "";
  }
}

// Function to render the chessboard into HTML
function renderBoard() {
  let html = "";
  for (let i = 0; i < 8; i++) {
    html += "<div class='row'>";
    for (let j = 0; j < 8; j++) {
      let squareClass = (i + j) % 2 === 0 ? "white" : "black";
      html += `<div class='square ${squareClass}' id='square-${i}-${j}'>${board[i][j]}</div>`;
    }
    html += "</div>";
  }
  document.getElementById("chessboard").innerHTML = html;
}

// Initialize the chessboard with pieces
function initBoard() {
  // Set up the pawns
  for (let i = 0; i < 8; i++) {
    board[1][i] = "P";
    board[6][i] = "p";
  }

  // Set up the rooks
  board[0][0] = board[0][7] = "R";
  board[7][0] = board[7][7] = "r";

  // Set up the knights
  board[0][1] = board[0][6] = "N";
  board[7][1] = board[7][6] = "n";

  // Set up the bishops
  board[0][2] = board[0][5] = "B";
  board[7][2] = board[7][5] = "b";

  // Set up the queens
  board[0][3] = "Q";
  board[7][3] = "q";

  // Set up the kings
  board[0][4] = "K";
  board[7][4] = "k";
}

// Initialize the board and render it
initBoard();
renderBoard();

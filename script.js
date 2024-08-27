let selectedPiece = null;
let selectedPosition = null;

let board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
  for (let j = 0; j < 8; j++) {
    board[i][j] = "";
  }
}

function renderBoard() {
  let html = "";
  for (let i = 0; i < 8; i++) {
    html += "<div class='row'>";
    for (let j = 0; j < 8; j++) {
      let squareClass = (i + j) % 2 === 0 ? "white" : "black";
      let piece = board[i][j];
      let pieceImg = "";

      if (piece) {
        let color = piece[0] === piece[0].toUpperCase() ? "white" : "black";
        let pieceType = piece.toLowerCase();

        let pieceUrl = getPieceUrl(color, pieceType);
        pieceImg = `<img src="${pieceUrl}" alt="${piece}" width="50px" height="50px">`;
      }

      html += `<div class='square ${squareClass}' id='square-${i}-${j}' onClick='handleClick(${i},${j})'>${pieceImg}</div>`;
    }
    html += "</div>";
  }
  document.getElementById("chessboard").innerHTML = html;
}

function initBoard() {
  for (let i = 0; i < 8; i++) {
    board[1][i] = "Pawn";
    board[6][i] = "pawn";
  }

  board[0][0] = board[0][7] = "Rook";
  board[7][0] = board[7][7] = "rook";

  board[0][1] = board[0][6] = "Knight";
  board[7][1] = board[7][6] = "knight";

  board[0][2] = board[0][5] = "Bishop";
  board[7][2] = board[7][5] = "bishop";

  board[0][3] = "Queen";
  board[7][3] = "queen";

  board[0][4] = "King";
  board[7][4] = "king";
}

function getPieceUrl(color, pieceType) {
  const baseUrl = "https://upload.wikimedia.org/wikipedia/commons/";

  const urls = {
    "white-pawn": "4/45/Chess_plt45.svg",
    "white-rook": "7/72/Chess_rlt45.svg",
    "white-knight": "7/70/Chess_nlt45.svg",
    "white-bishop": "b/b1/Chess_blt45.svg",
    "white-queen": "1/15/Chess_qlt45.svg",
    "white-king": "4/42/Chess_klt45.svg",
    "black-pawn": "c/c7/Chess_pdt45.svg",
    "black-rook": "f/ff/Chess_rdt45.svg",
    "black-knight": "e/ef/Chess_ndt45.svg",
    "black-bishop": "9/98/Chess_bdt45.svg",
    "black-queen": "4/47/Chess_qdt45.svg",
    "black-king": "f/f0/Chess_kdt45.svg",
  };

  return baseUrl + urls[`${color}-${pieceType}`];
}

function handleClick(i, j) {
  let piece = board[i][j];
  console.log(piece, selectedPiece);
  if (selectedPiece) {
    board[i][j] = selectedPiece;
    board[selectedPosition[0]][selectedPosition[1]] = "";
    selectedPiece = null;
    selectedPosition = null;
  } else if (piece) {
    selectedPiece = piece;
    selectedPosition = [i, j];
  }

  renderBoard();
}

initBoard();
renderBoard();

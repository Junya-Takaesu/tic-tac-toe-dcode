// Repesents single game of tic tac toe
export default class Game {
  constructor() {
    this.turn = "X";
    this.board = new Array(9).fill(null);
  }

  nextTurn() {
    this.turn = this.turn === "X" ? "O" : "X"
  }

  makeMove(i) {
    if (!this.isInProgress()) {
      return;
    }

    if (this.board[i]) {
      return;
    }

    this.board[i] = this.turn;

    if (!this.findWinningCombination()) {
      this.nextTurn();
    }
  }

  findWinningCombination() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // wininngincombination を一つづつループする
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;

      // 勝ちの組み合わせは、下記の様に
      // 必ずアスタで挟まれたマスが埋まるという前提で、
      // ┌-----┬-----┬-----┐
      // | *0* | *1* | *2* |
      // | *3* |  4  |  5  |
      // | *6* |  7  |  8  |
      // └-----┴-----┴-----┘
      // アスタのマスが埋まっているとき(ついまり変数 a != null)、
      // そのマスと同じ線上の b と c のマスにも a　のマスト同じ値が入っていると、
      // 勝ちの組み合わせ成立になる。
      if (this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
        return combination;
      }
    }
    return null;
  }

  isInProgress() {
    // 勝ちの組み合わせが無い(=>null=>false=>true) && boardに初期値のnullが含まれている
    return !this.findWinningCombination() && this.board.includes(null);
  }
}
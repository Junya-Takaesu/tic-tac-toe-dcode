import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.querySelector("#app"));

gameView.onTileClick = (i) => {
  console.log(`Tile clicked: ${i}`);
  game.makeMove(i);
  gameView.update(game);
};

gameView.onRestartClick = () => {
  console.log("game is restarted");
  game = new Game();
  gameView.update(game);
};

gameView.update(game);
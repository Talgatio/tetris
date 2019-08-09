import Game from './modules/game.js';
import View from './modules/view.js';

const element = document.querySelector('#element');

const game = new Game();
const view = new View(element, 480, 640, 20, 10);

window.game = game;
window.view = view;
let interval;
let isPause = false;
document.addEventListener('keydown', event => {
  console.log(event.keyCode);
  switch (event.keyCode) {
    case 37:
      game.movePieceLeft();
      view.renderMainScreen(game.getState());
      break;
    case 38:
      game.rotatePiece();
      view.renderMainScreen(game.getState());
      break;
    case 39:
      game.movePieceRight();
      view.renderMainScreen(game.getState());
      break;
    case  40:
      game.movePieceDown();
      view.renderMainScreen(game.getState());
      break;
    case 13:
      //view.renderMainScreen(game.getState());
      interval = setInterval(() => {
        game.movePieceDown();
        view.renderMainScreen(game.getState());
      }, 700);
      break;
    case 80:
      view.renderPauseScreen();
      if (interval) {
        clearInterval(interval);
      }
  }
});

view.renderStartScreen();

// setInterval(() => {
//   game.movePieceDown();
//   view.render(game.getState());
// }, 700);

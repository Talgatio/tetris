import Game from './modules/game.js';
import View from './modules/view.js';

const element = document.querySelector('#element');

const game = new Game();
const view = new View(element, 320, 640, 20, 10);

window.game = game;
window.view = view;

document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      game.movePieceLeft();
      view.render(game.getState());
      break;
    case 38:
      game.rotatePiece();
      view.render(game.getState());
      break;
    case 39:
      game.movePieceRight();
      view.render(game.getState());
      break;
    case  40:
      game.movePieceDown();
      view.render(game.getState());
      break;
  }
});

setInterval(() => {
  game.movePieceDown();
  view.render(game.getState());
}, 700);

const BaseballGame = require("./BaseBallGame");
const OutputView = require("./OutputView");

class App {
  constructor() {
    this.baseballGame = new BaseballGame();
  }

  play() {
    OutputView.startGame();
    this.baseballGame.play();
  }
}

const app = new App();
app.play();

module.exports = App;
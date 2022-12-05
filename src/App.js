const BaseballGame = require("./BaseBallGame");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.startGame();
    this.baseballGame = new BaseballGame();
  }
}

const app = new App();
app.play();

module.exports = App;
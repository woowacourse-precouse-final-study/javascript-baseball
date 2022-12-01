const InputView = require("./InputView");
const OutputView = require("./OutputView");

class App {
  play() {
    OutputView.startGame();
    InputView.readUserNumber();
  }
}

const app = new App();
app.play();

module.exports = App;
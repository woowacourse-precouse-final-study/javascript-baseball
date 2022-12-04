const Controller = require('../src/controller/Controller');

class App {
  play() {
    const baseball = new Controller();
    baseball.start();
  }
}

module.exports = App;

const app = new App();
app.play();

const ComputerNumberMaker = require("./ComputerNumberMaker");
const { Console } = require("@woowacourse/mission-utils")
const { readUserNumber, readRetryOrDone } = require("./InputView");
const OutputView = require("./OutputView");

class BaseballGame {
  #computerNumber;
  #userNumber;

  constructor() {
    this.#computerNumber = ComputerNumberMaker.makeComputerNumber();
    console.log(this.#computerNumber)
  }

  play() {
    readUserNumber(this.compareUserAndComputer.bind(this))
  }

  init() {
    this.#computerNumber = ComputerNumberMaker.makeComputerNumber();
    this.play();
  }

  compareUserAndComputer(input) {
    this.#userNumber = input;
    OutputView.printGameResult(this.countBallNumbers(), this.countStrikeNumbers());
    this.findThreeStrike();
    this.play();
  }

  countStrikeNumbers() {
    return this.#computerNumber.filter(
      (number, index) => number == this.#userNumber[index]
    ).length;
  }

  countBallNumbers() {
    return this.#computerNumber.filter(
      (number, index) =>
        this.#userNumber.includes(number) && number != this.#userNumber[index]
    ).length;
  }

  findThreeStrike() {
    const strike = this.countStrikeNumbers();
    if (strike === 3) {
      OutputView.printAnswerMessage();
      readRetryOrDone(this.retry.bind(this))}
  }

  retry(input) {
    return (input === '1') ? this.init() : Console.close();
  }
  
}

module.exports = BaseballGame;

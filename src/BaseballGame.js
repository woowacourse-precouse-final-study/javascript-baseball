const ComputerNumberMaker = require("./ComputerNumberMaker");
const { Console } = require("@woowacourse/mission-utils")
const { readUserNumber, readRetryOrDone } = require("./InputView");
const OutputView = require("./OutputView");

const RETRY_OPTION_KEY = '1';
const SUCCESS_NUMBER = 3;

class BaseballGame {
  #computerNumber;
  #userNumber;

  constructor() {
    this.#computerNumber = ComputerNumberMaker.makeComputerNumber();
    readUserNumber(this.compareUserAndComputer.bind(this));
  }
  
  compareUserAndComputer(input) {
    this.#userNumber = input;
    OutputView.printGameResult(this.countBallNumbers(), this.countStrikeNumbers());
    this.findThreeStrike();
    readUserNumber(this.compareUserAndComputer.bind(this));
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
    if (strike === SUCCESS_NUMBER) {
      OutputView.printAnswerMessage();
      readRetryOrDone(this.retry.bind(this))}
  }

  retry(input) {
    return (input === RETRY_OPTION_KEY) ? new BaseballGame() : Console.close();
  }
  
}

module.exports = BaseballGame;

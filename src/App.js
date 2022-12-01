const { Console } = require("@woowacourse/mission-utils");
const BaseBallRandomNumberGenerator = require('./BaseBallRandomNumberGenerator');
const {
  printStartMention,
  printEndMention,
  printBallStrikeCount,
  printNoting,
  printBallCount,
  printStrikeCount,
  printThreeStrike
} = require('./views/OutputView');
const { 
  isValidateInputNumber,
  isValidateGameOption,
} = require('./Validation');
const {
  BASEBALL_GAME_OPTION,
  BASEBALL_GAME_INPUT,
} = require('./constant/BaseBallGame');

function stringToArray(number) {
  return String(number).split('').map((str) => Number(str));
}

function printCompareResult(result) {
  if (result['strikeCount'] === 3) {
    printThreeStrike();
    return true;
  }

  if (result['strikeCount'] === 0 && result['ballCount'] === 0) {
    printNoting();
  } else if (result['strikeCount'] === result['ballCount']) {
    printStrikeCount(result['strikeCount']);
  } else if (result['strikeCount'] === 0  && result['ballCount'] > 0) {
    printBallCount(result['ballCount']);
  } else {
    printBallStrikeCount(result['ballCount'] - result['strikeCount'],result['strikeCount']);
  }
  return false;
}

function compareNumber(userNumber, randomNumber) {
  const result = { strikeCount: 0, ballCount: 0 };

  userNumber.forEach((number, index) => {
    if (number === randomNumber[index]) {
      result['strikeCount'] += 1;
    }
    if (randomNumber.indexOf(number) !== -1) {
      result['ballCount'] += 1;
    }
  })

  return printCompareResult(result);
}

class App {
  constructor() {
    this.userNumber = [0, 0, 0];
    this.randomNumber = [0, 0, 0];
  }

  restartGameOption() {
    this.randomNumber = BaseBallRandomNumberGenerator();
    this.inputUserNumber(BASEBALL_GAME_INPUT.input_baseball_number);  
  }

  endGameOption() {
    printEndMention();
    Console.close();
  }

  gameOption(questionText) {
    Console.readLine(questionText, (input) =>{
      isValidateGameOption(input);

      if (input === BASEBALL_GAME_OPTION.restart){
        this.restartGameOption();
      } else if (input === BASEBALL_GAME_OPTION.end){
        this.endGameOption();
      }
    })
  }

  inputUserNumber (questionText) {
    Console.readLine(questionText, (input) => {
      isValidateInputNumber(input);

      this.userNumber = stringToArray(input);
      let result = compareNumber(this.userNumber, this.randomNumber);

      if (result) {
        this.gameOption(BASEBALL_GAME_INPUT.input_baseball_option);
      } else {
        this.inputUserNumber(questionText);
      }
    })
  }

  play() {
    printStartMention();
    this.randomNumber = BaseBallRandomNumberGenerator();
    this.inputUserNumber(BASEBALL_GAME_INPUT.input_baseball_number); 
  }
}

module.exports = App;

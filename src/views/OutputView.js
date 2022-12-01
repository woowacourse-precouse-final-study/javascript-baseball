const { Console } = require('@woowacourse/mission-utils');
const { 
  BASEBALL_GAME_OUTPUT,
  BASEBALL_GAME_SENTENCE
} = require('../constant/BaseBallGame');

const OutputView = {
  printStartMention() {
    Console.print(BASEBALL_GAME_SENTENCE.start);
  },

  printEndMention() {
    Console.print(BASEBALL_GAME_SENTENCE.end);
  },

  printThreeStrike() {
    Console.print(BASEBALL_GAME_OUTPUT.three_strike);
  },

  printNoting() {
    Console.print(BASEBALL_GAME_OUTPUT.nothing);
  },

  printBallCount(ball) {
    Console.print(`${ball}`+ BASEBALL_GAME_OUTPUT.ball);
  },

  printStrikeCount(strike) {
    Console.print(`${strike}`+ BASEBALL_GAME_OUTPUT.strike);
  },

  printBallStrikeCount(ball, strike) {
    Console.print(`${ball}`+ BASEBALL_GAME_OUTPUT.ball + ` ${strike}`+ BASEBALL_GAME_OUTPUT.strike);
  },
}

module.exports = OutputView;

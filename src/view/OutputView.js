const { Console } = require('@woowacourse/mission-utils');
const {
  GAME_DIRECTION_OUTPUT_MESSAGE: { OPENING, CORRECT_ANSWER },
  RESULT_MESSAGE: { NOTHING, STRIKE, BALL },
} = require('../constants');
const { generateResultString } = require('../utils');

const OuputView = {
  printOpening() {
    Console.print(OPENING);
  },

  printResult(result) {
    if (!result[BALL] && !result[STRIKE]) return Console.print(NOTHING);
    Console.print(generateResultString(result[BALL], result[STRIKE]));
  },

  printEnding() {
    Console.print(CORRECT_ANSWER);
  },
};

module.exports = OuputView;

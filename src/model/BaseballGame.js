const {
  RESULT_MESSAGE: { STRIKE, BALL },
  TARGET_NUMBER_CONSTRAINTS: { NUMBER_LENGTH, RANGE_MIN, RANGE_MAX },
} = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class BaseballGame {
  #targetNumber;
  #result = {
    [BALL]: 0,
    [STRIKE]: 0,
  };

  constructor() {
    this.#targetNumber = this.generateTargetNumber();
  }

  generateTargetNumber() {
    const targetNum = new Set();
    while (targetNum.size < NUMBER_LENGTH) {
      const number = Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
      targetNum.add(number);
    }

    return Number([...targetNum].join(''));
  }

  generateResult(guessNum) {
    this.clearResult();

    [...String(this.#targetNumber)].map((digit, idx) => {
      const isStrike = String(guessNum)[idx] === digit;
      const isBall = !isStrike && String(guessNum).includes(digit);

      if (isStrike) this.#result[STRIKE] += 1;
      if (isBall) this.#result[BALL] += 1;
    });

    return this.#result;
  }

  checkIsAnswer() {
    return this.#result[STRIKE] === NUMBER_LENGTH;
  }

  clearResult() {
    this.#result[STRIKE] = 0;
    this.#result[BALL] = 0;
  }
}

module.exports = BaseballGame;

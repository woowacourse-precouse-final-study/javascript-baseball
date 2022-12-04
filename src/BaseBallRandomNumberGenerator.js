const { Random } = require('@woowacourse/mission-utils');
const { BASEBALL_GAME_OPTION } = require('./constant/BaseBallGame');

function BaseBallRandomNumberGenerator() {
  const computer = [];
  while (computer.length < BASEBALL_GAME_OPTION.number_len) {
    const number = Random.pickNumberInRange(BASEBALL_GAME_OPTION.min_number, BASEBALL_GAME_OPTION.max_number);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

module.exports = BaseBallRandomNumberGenerator;
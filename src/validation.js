const {
  ERROR_MESSAGE,
  TARGET_NUMBER_CONSTRAINTS: { NUMBER_LENGTH },
  COMMAND_OPTIONS: { END, RETRY },
} = require('./constants');
const { checkDuplicates } = require('./utils');

const Validation = {
  checkValidGuessNumber(num) {
    if (isNaN(Number(num))) {
      throw new Error(ERROR_MESSAGE.TYPE_CHECK);
    }
    if (num.length !== NUMBER_LENGTH) {
      throw new Error(ERROR_MESSAGE.LENGTH_CHECK);
    }
    if (checkDuplicates(num)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_CHECK);
    }
  },
  checkValidCommand(command) {
    if (command !== RETRY && command !== END) {
      throw new Error(ERROR_MESSAGE.INPUT_CHECK);
    }
  },
};

module.exports = { Validation };

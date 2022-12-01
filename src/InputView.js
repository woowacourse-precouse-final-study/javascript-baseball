const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = {
  NUMBER: "숫자를 입력해주세요 : ",
};

const ERROR_MSG = {
  THREE_DIGITS: "3자리 숫자를 입력해주세요.",
};

const InputView = {
  readUserNumber() {
    Console.readLine(INPUT_QUERY.NUMBER, (input) => {
      ErrorHandling.userNumber(input);
    });
  },
};

const ErrorHandling = {
  userNumber(input) {
    if (input.length !== 3) {
      throw new Error(ERROR_MSG.THREE_DIGITS);
    }
  },
};

module.exports = InputView;

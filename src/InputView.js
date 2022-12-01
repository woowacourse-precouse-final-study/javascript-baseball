const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = {
  NUMBER: "숫자를 입력해주세요 : ",
};

const ERROR = {
  THREE_DIGITS: 3,
  NOT_THREE_DIGITS: "3자리 숫자를 입력해주세요.",
  NOT_NUMBER: "숫자를 입력해주세요",
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
    if (input.length !== ERROR.THREE_DIGITS) throw new Error(ERROR.NOT_THREE_DIGITS);
    if (isNaN(input)) throw new Error(ERROR.NOT_NUMBER);
  },
};

module.exports = InputView;

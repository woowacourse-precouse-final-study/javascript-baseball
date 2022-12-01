const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = {
  NUMBER: "숫자를 입력해주세요 : ",
};

const ERROR = {
  THREE_DIGITS: 3,
  NOT_THREE_DIGITS: "3자리 숫자를 입력해주세요.",
  NOT_NUMBER: "숫자를 입력해주세요",
  DUPLICATE: "중복된 숫자가 있습니다."
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
    if (new Set([...input]).size !== ERROR.THREE_DIGITS) throw new Error(ERROR.DUPLICATE);
  },
};

module.exports = InputView;

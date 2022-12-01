const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = {
  NUMBER: "숫자를 입력해주세요 : ",
  RETRY_OR_DONE: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const ERROR = {
  THREE_DIGITS: 3,
  NOT_THREE_DIGITS: "3자리 숫자를 입력해주세요.",
  NOT_NUMBER: "숫자를 입력해주세요",
  DUPLICATE: "중복된 숫자가 있습니다.",
  NOT_ONE_OR_TWO: "1이나 2만 입력할 수 있습니다."
};

const InputView = {
  readUserNumber(callback) {
    Console.readLine(INPUT_QUERY.NUMBER, (input) => {
      ErrorHandling.userNumber(input);
      callback(input);
    });
  },

  readRetryOrDone(callback) {
    Console.readLine(INPUT_QUERY.RETRY_OR_DONE, (input) => {
      ErrorHandling.retryOrDone(input);
      callback(input);
    })
  }
};

const ErrorHandling = {
  userNumber(input) {
    if (input.length !== ERROR.THREE_DIGITS) throw new Error(ERROR.NOT_THREE_DIGITS);
    if (isNaN(input)) throw new Error(ERROR.NOT_NUMBER);
    if (new Set([...input]).size !== ERROR.THREE_DIGITS) throw new Error(ERROR.DUPLICATE);
  },
  
  retryOrDone(input) {
    if (/[^12]/g.test(input) || input.length !== 1) throw new Error(ERROR.NOT_ONE_OR_TWO);
  }
};

module.exports = InputView;

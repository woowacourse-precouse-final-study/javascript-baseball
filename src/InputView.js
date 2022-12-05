const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = {
  number: "숫자를 입력해주세요 : ",
  retry_or_done: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const THREE_DIGITS = 3;
const RETRY_REGEXP = /[^12]/g;

const ERROR = {
  three_digits: 3,
  not_three_digits: "3자리 숫자를 입력해주세요.",
  not_number: "숫자를 입력해주세요",
  duplicate: "중복된 숫자가 있습니다.",
  not_one_or_two: "1이나 2만 입력할 수 있습니다.",
  one_digit: "1과 2중 한 자리만 입력할 수 있습니다.",
};

const InputView = {
  readUserNumber(readUserCallback) {
    Console.readLine(INPUT_QUERY.number, (input) => {
      ErrorHandling.userNumber(input);
      readUserCallback(input);
    });
  },

  readRetryOrDone(retryOrDoneCallback) {
    Console.readLine(INPUT_QUERY.retry_or_done, (input) => {
      ErrorHandling.retryOrDone(input);
      retryOrDoneCallback(input);
    });
  },
};

const ErrorHandling = {
  userNumber(input) {
    if (input.length !== THREE_DIGITS) throw new Error(ERROR.three_digits);
    if (isNaN(input)) throw new Error(ERROR.not_number);
    if (new Set([...input]).size !== THREE_DIGITS) throw new Error(ERROR.duplicate);
  },

  retryOrDone(input) {
    if (RETRY_REGEXP.test(input)) throw new Error(ERROR.not_one_or_two);
    if (input.length !== 1) throw new Error(ERROR.one_digit);
  },
};

module.exports = InputView;

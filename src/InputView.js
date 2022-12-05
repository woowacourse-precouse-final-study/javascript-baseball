const { Console } = require("@woowacourse/mission-utils");
const Validation = require('./Validation')

const INPUT_QUERY = {
  number: "숫자를 입력해주세요 : ",
  retry_or_done: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

const InputView = {
  readUserNumber(readUserCallback) {
    Console.readLine(INPUT_QUERY.number, (input) => {
      Validation.userNumber(input);
      readUserCallback(input);
    });
  },

  readRetryOrDone(retryOrDoneCallback) {
    Console.readLine(INPUT_QUERY.retry_or_done, (input) => {
      Validation.retryOrDone(input);
      retryOrDoneCallback(input);
    });
  },
};



module.exports = InputView;

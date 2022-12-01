const { Console } = require("@woowacourse/mission-utils");

const INPUT_QUERY = {
  NUMBER: "숫자를 입력해주세요 : ",
};

const InputView = {
  readUserNumber() {
    Console.readLine(INPUT_QUERY.NUMBER, (input) => {});
  },
};

module.exports = InputView;

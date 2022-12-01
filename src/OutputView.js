const {Console} = require("@woowacourse/mission-utils");

const OUTPUT = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  ANSWER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  NOTHING: "낫싱",
  BLANK: "",
  BALL: "볼 ",
  STRIKE: "스트라이크"
}

const OutputView = {
  startGame() {
    Console.print(OUTPUT.GAME_START);
  },

  printGameResult(ball, strike) {
    if (!strike && !ball) return Console.print(OUTPUT.NOTHING);
    return Console.print(
      `${ball ? ball + OUTPUT.BALL : OUTPUT.BLANK}${
        strike ? strike + OUTPUT.STRIKE : OUTPUT.BLANK
      }`
    );
  },

  printAnswerMessage() {
    Console.print(OUTPUT.ANSWER)
  }
}

module.exports = OutputView;
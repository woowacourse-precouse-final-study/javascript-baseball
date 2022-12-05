const { Console } = require("@woowacourse/mission-utils");

const OUTPUT = {
  game_start: "숫자 야구 게임을 시작합니다.",
  answer: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  nothing: "낫싱",
  null: "",
  ball: "볼",
  strike: "스트라이크",
};

const OutputView = {
  startGame() {
    Console.print(OUTPUT.game_start);
  },

  printGameResult(ball, strike) {
    if (!strike && !ball) return Console.print(OUTPUT.nothing);
    return Console.print(
      `${ball ? ball + OUTPUT.ball : OUTPUT.null} ${
        strike ? strike + OUTPUT.strike : OUTPUT.null
      }`.trim()
    );
  },

  printAnswerMessage() {
    Console.print(OUTPUT.answer);
  },
};

module.exports = OutputView;

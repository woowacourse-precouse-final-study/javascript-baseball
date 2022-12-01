const {Console} = require("@woowacourse/mission-utils");

const GAME_START = "숫자 야구 게임을 시작합니다."

const OutputView = {
  startGame() {
    Console.print(GAME_START);
  }
}

module.exports = OutputView;
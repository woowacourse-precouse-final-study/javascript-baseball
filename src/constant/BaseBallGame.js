const BASEBALL_GAME_OPTION = {
  restart: '1',
  end: '2',
}
const BASEBALL_GAME_SENTENCE = {
  start: "숫자 야구 게임을 시작합니다.",
  end: "게임을 완전히 종료합니다.",
}
    
const BASEBALL_GAME_INPUT = {
  input_baseball_number: "숫자를 입력하세요 :",
  input_baseball_option: "'게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'",
}
    
const BASEBALL_GAME_OUTPUT = {
  three_strike: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n',
  nothing: "낫싱",
  strike: "스트라이크",
  ball: '볼',
}
    
module.exports = {
  BASEBALL_GAME_SENTENCE,
  BASEBALL_GAME_INPUT,
  BASEBALL_GAME_OUTPUT,
  BASEBALL_GAME_OPTION,
}


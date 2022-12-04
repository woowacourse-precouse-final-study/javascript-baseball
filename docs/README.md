미션 - ⚾️ 숫자야구 기능 분석 (daepan)
🎓 해결해야할 문제

🚀 기능 요구 사항

❓ 문제 정의
컴퓨터가 결정한 3자리 숫자에 대해 사용자가 맞추는 게임
컴퓨터는 랜덤한 세자리 숫자를 만들어야하고, 사용자의 입력에 맞춘 결과를 보여준다. ex) 볼, 스트라이크, 낫싱
또한 게임종료 시 사용자의 입력에 따라 게임을 재시작 혹은 종료해야한다.
그리고 해당 흐름 속에서 에러가 날 수 있는 상황에 대한 예외처리를 생각한다.


💻 입력
[ ] 게임에 대한 3자리 숫자를 입력할 수 있는 기능 - inputUserNumber
[ ] 3스트라이크 이후 게임을 계속할 건지, 종료할건지에 대한 입력을 받는 기능 = gameOption

📊 내부 처리
[ ] 3자리 수의 랜덤 수 반환하는 기능 - setRandomNumber
[ ] 사용자가 입력한 문자열을 배열로 변환하는 기능 - stringToArray
[ ] 사용자가 입력한 숫자가 랜덤 수가 존재하는 하는 경우에 대한 결과 값 반환 기능 - compareNumber
[ ] 게임종료 이후 1 입력 시 게임을 시작할 수 있는 기능 -startGameOption
[ ] 게임종료 이후 2 입력 시 게임을 종료하는 기능 - endGameOption

👨 사용자에 대한 출력
[ ] 게임시작 시 게임 시작 멘트 출력 기능 - printStartSentence
[ ] 랜덤 숫자와 사용자의 숫자 비교결과를 알맞는 문장을 출력 하는 기능 - printCompareResult

🗑 예외사항
[ ] inputUserNumber 입력에 대한 에러처리 기능 - isValidateInputNumber

숫자가 아닌 입력이 들어온 경우
중복된 값이 들어오게 된 경우
세자리 숫자에 0이 입력된 경우
입력 길이의 숫자가 3이 아닌 경우
[ ] 게임종료 이후 1과 2 이외의 수 입력 시 에러처리 기능 - isValidateGameOption

입력된 숫자가 1이나 2가 아닌 경우
✅ 기능 구현 시 확인할 사항
입력과 출력에서는 MissionUtils 라이브러리에서 제공하는 Console.readLine, Console.print를 활용한다.
랜덤 수 반환의 경우 Random.pickNumberInRange()를 활용한다.
JavaScript 네이밍 컨벤션을 잘 지켜야한다.
함수가 하나의 기능과 하나의 역할만 하고 있는지 주의한다.
함수 네이밍이 직관적인지 확인하자.


📌 기능 구현
기능 구현을 하며 App에 모든 내용을 넣으려고 했으나 게임 플레이에 있어서 constructor의 변수나 메서드에 직접 접근할 필요가 없는 경우,
혹은 숫자야구게임에 대한 입력 기능이나 간단한 메서드를 제외한 내부처리 메서드들을 분할하여 코드의 App에

## 정규 표현식
중복된 값이 들어오게 된 경우 - DUPLICATION_NUMBER_REGEXP
숫자가 아닌 입력이 들어온 경우 - NUMBER_REGEXP
세자리 숫자에 0이 입력된 경우 - IS_ZERO_REGEXP

## 상수
야구게임에 활용되는 static 상수 - BASEBALL_GAME_OPTION
야구게임에서 활용되는 멘트 - BASEBALL_GAME_SENTENCE
야구게임에서 입력에 활용되는 상수 - BASEBALL_GAME_INPUT
야구게임에서 출력에 활용되는 상수 - BASEBALL_GAME_OUTPUT
예외사항에 대한 멘트 상수 - Validation

## 함수
사용자가 입력한 문자열을 배열로 변환하는 기능 - stringToArray()
사용자가 입력한 숫자가 랜덤 수가 존재하는 하는 경우에 대한 결과 값 반환 기능 - compareNumber()
랜덤 숫자와 사용자의 숫자 비교결과를 알맞는 문장을 print 하는 기능 - printCompareResult()

## views
Console.print로 활용되는 내용들을 분리
### OutputView
게임 시작시 출력되는 멘트 출력 기능 - printStartMention
게임 종료시 출력되는 멘트 출력 기능 - printEndMention
3스트라이크 멘트 출력 기능 - printThreeStrike
아무것도 맞추지 못할 시 멘트 출력 기능 - printNoting
볼만 존재할 때 멘트 출력 기능 - printBallCount
스트라이크만 존재할 때 멘트 출력 기능 - printStrikeCount
볼과 스트라이크가 존재할 때 출력 기능 - printBallStrikeCount

## BaseBallRandomNumberGenerator

야구게임에 활용되는 랜덤한 세 자리 숫자 생성기 분리

## Validation
게임종료 이후 1과 2 이외의 수 입력 시 에러처리 기능 - isValidateGameOption

게임에서 사용자가 입력하는 숫자의 예외사항 검증 함수  - isValidateInputNumber

## App

게임종료 이후 1 입력 시 게임을 시작할 수 있는 기능 -startGameOption()

게임종료 이후 2 입력 시 게임을 종료하는 기능 - endGameOption()

3스트라이크 이후 게임을 계속할 건지, 종료할건지에 대한 입력을 받는 기능 = gameOption()

게임에 대한 3자리 숫자를 입력할 수 있는 기능 - inputUserNumber()

inputUserNumber 입력에 대한 에러처리 기능 - isValidateInputNumber()

게임을 호출하는 기능 - play()
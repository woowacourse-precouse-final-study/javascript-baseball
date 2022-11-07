const MissionUtils = require('@woowacourse/mission-utils');

class App {
	play() {
		console.log('숫자 야구 게임을 시작합니다.');
		const computerNum = this.chooseTargetNumber();
		
    console.log('computerNum: ',computerNum)
	}

	chooseTargetNumber() {
		const targetNum = MissionUtils.Random.pickNumberInRange(100, 999);
		return targetNum;
	}
}

module.exports = App;

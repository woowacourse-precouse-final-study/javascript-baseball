const MissionUtils = require('@woowacourse/mission-utils');

class App {
	async play() {
		console.log('숫자 야구 게임을 시작합니다.');
		const computerNum = this.chooseTargetNumber();
		const userInput = await this.getUserInput('숫자를 입력해주세요 : ');

		console.log('computerNum: ', computerNum);
		console.log('userInput: ', userInput);
	}

	chooseTargetNumber() {
		const targetNum = MissionUtils.Random.pickNumberInRange(100, 999);
		return targetNum;
	}

	getUserInput(query) {
		const readline = require('readline');
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});

		return new Promise(resolve =>
			rl.question(query, ans => {
				rl.close();
				resolve(ans);
			}),
		);
	}
}

module.exports = App;

const MissionUtils = require('@woowacourse/mission-utils');

class App {
	async play() {
		console.log('숫자 야구 게임을 시작합니다.');
		const computerNum = this.chooseTargetNumber();
		const userInput = await this.getUserInput('숫자를 입력해주세요 : ');

		console.log('computerNum: ', computerNum);
		console.log('userInput: ', userInput);

		const result = this.generateResult(computerNum, userInput);
		console.log('result: ',result);
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
			terminal: false,
		});

		return new Promise(resolve =>
			rl.question(query, ans => {
				rl.close();
				resolve(ans);
			}),
		);
	}

	generateResult(num1, num2) {
		const result = {};

		[...String(num1)].map((digit, idx) => {
			if (String(num2)[idx] === digit) {
				result['스트라이크'] ? result['스트라이크']++ : (result['스트라이크'] = 1);
			} else if (String(num2).includes(digit)) {
				result['볼'] ? result['볼']++ : (result['볼'] = 1);
			}
		});

		let result_message = '';

		if (!Object.keys(result).length) {
			result_message = '낫싱';
		} else {
			if (result['볼']) {
				result_message += `${result['볼']}볼`;
			}
			if (result['스트라이크']) {
				result_message += ` ${result['스트라이크']}스트라이크`;
			}
		}

		console.log(result_message);

		return result;
	}
}

module.exports = App;

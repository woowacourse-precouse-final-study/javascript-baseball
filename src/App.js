const MissionUtils = require('@woowacourse/mission-utils');

class App {
	play(mode = 'first') {
		if (mode === 'first') {
			console.log('숫자 야구 게임을 시작합니다.');
		}
		const computerNum = this.chooseTargetNumber();
		this.guessTarget(computerNum);
	}

	chooseTargetNumber() {
		const targetNum = [];
		while (targetNum.length < 3) {
			const number = MissionUtils.Random.pickNumberInRange(1, 9);
			if (!targetNum.includes(number)) {
				targetNum.push(number);
			}
		}
		
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
				result_message += `${result['볼']}볼 `;
			}
			if (result['스트라이크']) {
				result_message += `${result['스트라이크']}스트라이크`;
			}
		}

		console.log(result_message);

		return result;
	}

	async guessTarget(target) {
		while (true) {
			const userNum = await this.getUserInput('숫자를 입력해주세요 : ');
			this.checkValidity(userNum);

			const result = this.generateResult(target, userNum);

			if (result['스트라이크'] === 3) {
				console.log('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
				this.restart();
				break;
			}
		}
	}

	async restart() {
		const userInput = await this.getUserInput('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
		if (userInput === '1') {
			this.play('replay');
		} else if (userInput === '2') {
			return;
		} else {
			throw new Error('1과 2 중 하나만 입력해주세요.');
		}
	}

	checkValidity(num) {
		if (isNaN(Number(num))) {
			throw new Error('숫자만 입력해주세요');
		}
		if (num.length !== 3) {
			throw new Error('3자리 숫자를 입력해주세요');
		}
	}
}

module.exports = App;

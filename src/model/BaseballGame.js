const { RESULT_MESSAGE } = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class BaseballGame {
	#targetNumber;
	#result = {};
	#isAnswer = false;

	constructor() {
		this.#targetNumber = this.generateTargetNumber();
	}

	get targetNumber() {
		return this.#targetNumber;
	}

	get result() {
		return this.#result;
	}

	get isAnswer() {
		return this.#isAnswer;
	}

	generateTargetNumber() {
		const targetNum = new Set();
		while (targetNum.size < 3) {
			const number = Random.pickNumberInRange(1, 9);
			targetNum.add(number);
		}

		return Number([...targetNum].join(''));
	}

	generateResult(guessNum) {
		const { STRIKE, BALL } = RESULT_MESSAGE;

		[...String(this.#targetNumber)].map((digit, idx) => {
			if (String(guessNum)[idx] === digit) {
				this.#result[STRIKE] ? this.#result[STRIKE]++ : (this.#result[STRIKE] = 1);
			} else if (String(guessNum).includes(digit)) {
				this.#result[BALL] ? this.#result[BALL]++ : (this.#result[BALL] = 1);
			}
		});

		if (this.#result[STRIKE] === 3) {
			this.#isAnswer = true;
		}
	}
	clearResult() {
		this.#result = {};
	}
}

module.exports = BaseballGame;

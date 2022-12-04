const { RESULT_MESSAGE } = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class BaseballGame {
	#targetNumber;
	#result = {
		[RESULT_MESSAGE.BALL]: 0,
		[RESULT_MESSAGE.STRIKE]: 0,
	};
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
		this.clearResult();
		
		[...String(this.#targetNumber)].map((digit, idx) => {
			const isStrike = String(guessNum)[idx] === digit;
			const isBall = !isStrike && String(guessNum).includes(digit);

			if (isStrike) this.#result[RESULT_MESSAGE.STRIKE] += 1;
			if (isBall) this.#result[RESULT_MESSAGE.BALL] += 1;
		});

		return this.#result;
	}

	checkIsAnswer() {
		return this.#result[RESULT_MESSAGE.STRIKE] === 3;
	}

	clearResult() {
		this.#result[RESULT_MESSAGE.STRIKE] = 0;
		this.#result[RESULT_MESSAGE.BALL] = 0;
	}
}

module.exports = BaseballGame;

const {
	RESULT_MESSAGE,
	TARGET_NUMBER_CONSTRAINTS: { NUMBER_LENGTH, RANGE_MIN, RANGE_MAX },
} = require('../constants');
const { Random } = require('@woowacourse/mission-utils');

class BaseballGame {
	#targetNumber;
	#result = {
		[RESULT_MESSAGE.BALL]: 0,
		[RESULT_MESSAGE.STRIKE]: 0,
	};

	constructor() {
		this.#targetNumber = this.generateTargetNumber();
	}

	generateTargetNumber() {
		const targetNum = new Set();
		while (targetNum.size < NUMBER_LENGTH) {
			const number = Random.pickNumberInRange(RANGE_MIN, RANGE_MAX);
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
		return this.#result[RESULT_MESSAGE.STRIKE] === NUMBER_LENGTH;
	}

	clearResult() {
		this.#result[RESULT_MESSAGE.STRIKE] = 0;
		this.#result[RESULT_MESSAGE.BALL] = 0;
	}
}

module.exports = BaseballGame;

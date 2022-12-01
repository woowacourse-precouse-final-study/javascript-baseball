const { Console } = require('@woowacourse/mission-utils');
const { GAME_DIRECTION_OUTPUT_MESSAGE, RESULT_MESSAGE } = require('../constants');
const { NOTHING, STRIKE, BALL } = RESULT_MESSAGE;

const OuputView = {
	printOpening() {
		Console.print(GAME_DIRECTION_OUTPUT_MESSAGE.OPENING);
	},
	printResult(result) {
		let result_message = '';

		if (!Object.keys(result).length) {
			result_message = NOTHING;
		} else {
			if (result[BALL]) {
				result_message += `${result[BALL]}${BALL} `;
			}
			if (result[STRIKE]) {
				result_message += result[STRIKE] + STRIKE;
			}
		}

		Console.print(result_message);
	},
	printCorrectAnswer() {
		Console.print(GAME_DIRECTION_OUTPUT_MESSAGE.CORRECT_ANSWER);
	},
};

module.exports = OuputView;

const { Console } = require('@woowacourse/mission-utils');
const {
	GAME_DIRECTION_OUTPUT_MESSAGE,
	RESULT_MESSAGE: { NOTHING, STRIKE, BALL },
} = require('../constants');

const OuputView = {
	printOpening() {
		Console.print(GAME_DIRECTION_OUTPUT_MESSAGE.OPENING);
	},

	printResult(result) {
		if (!result[BALL] && !result[STRIKE]) return Console.print(NOTHING);
		Console.print(this.generateResultString(result[BALL], result[STRIKE]));
	},

	generateResultString(balls, strikes) {
		let resultString = '';
		balls ? (resultString += `${balls}${BALL} `) : '';
		strikes ? (resultString += `${strikes}${STRIKE}`) : '';

		return resultString;
	},
	
	printCorrectAnswer() {
		Console.print(GAME_DIRECTION_OUTPUT_MESSAGE.CORRECT_ANSWER);
	},
};

module.exports = OuputView;

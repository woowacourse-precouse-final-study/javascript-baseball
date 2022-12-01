const { Console } = require('@woowacourse/mission-utils');
const { GAME_DIRECTION_INPUT_MESSAGE } = require('../constants');

const InputView = {
	readGuess(guessController) {
		Console.readLine(GAME_DIRECTION_INPUT_MESSAGE.GUESS_NUMBER, guessInput => {
			guessController(guessInput);
		});
	},
	readCommand(commandController) {
		Console.readLine(GAME_DIRECTION_INPUT_MESSAGE.RESTART_OR_END, commandInput => {
			commandController(commandInput);
		});
	},
};

module.exports = InputView;

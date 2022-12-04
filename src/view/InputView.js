const { Console } = require('@woowacourse/mission-utils');
const {
	GAME_DIRECTION_INPUT_MESSAGE: { GUESS_NUMBER, RESTART_OR_END },
} = require('../constants');

const InputView = {
	readGuess(guessController) {
		Console.readLine(GUESS_NUMBER, guessInput => {
			guessController(guessInput);
		});
	},
	readCommand(commandController) {
		Console.readLine(RESTART_OR_END, commandInput => {
			commandController(commandInput);
		});
	},
};

module.exports = InputView;

const { Console } = require('@woowacourse/mission-utils');
const {
	GAME_DIRECTION_INPUT_MESSAGE: { GUESS_NUMBER, RESTART_OR_END },
} = require('../constants');
const {
	Validation: { checkValidGuessNumber, checkValidCommand },
} = require('../validation');

const InputView = {
	readGuess(guessController) {
		Console.readLine(GUESS_NUMBER, guessInput => {
			checkValidGuessNumber(guessInput);
			guessController(Number(guessInput));
		});
	},
	readCommand(commandController) {
		Console.readLine(RESTART_OR_END, commandInput => {
			checkValidCommand(commandInput);
			commandController(commandInput);
		});
	},
};

module.exports = InputView;

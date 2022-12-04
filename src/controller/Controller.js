const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BaseballGame = require('../model/BaseballGame');
const { Console } = require('@woowacourse/mission-utils');
const {
	COMMAND_OPTIONS: { RETRY },
} = require('../constants');

class Controller {
	constructor() {
		this.view = {
			output: OutputView,
			input: InputView,
		};
	}

	start() {
		this.view.output.printOpening();
		this.play();
	}

	play() {
		this.model = new BaseballGame();
		this.guess();
	}

	guess() {
		this.view.input.readGuess(guessNum => {
			const result = this.model.generateResult(guessNum);
			this.view.output.printResult(result);
			this.checkAnswer();
		});
	}

	checkAnswer() {
		const isAnswer = this.model.checkIsAnswer();
		if (isAnswer) {
			this.view.output.printEnding();
			this.restartOrEnd();
		}
		this.guess();
	}

	restartOrEnd() {
		this.view.input.readCommand(commandInput => {
			commandInput === RETRY ? this.play() : this.endGame();
		});
	}

	endGame() {
		Console.close();
	}
}

module.exports = Controller;

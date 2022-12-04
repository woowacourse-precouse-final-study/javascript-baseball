const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const Validation = require('../validation');
const BaseballGame = require('../model/BaseballGame');
const { Console } = require('@woowacourse/mission-utils');

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
			Validation.checkValidity(guessNum);
			const result = this.model.generateResult(guessNum);
			this.view.output.printResult(result);
			this.chekAnswer();
		});
	}

	chekAnswer() {
		const isAnswer = this.model.checkIsAnswer();
		if (isAnswer) {
			this.view.output.printCorrectAnswer();
			this.restartOrEnd();
		}
		this.guess();
	}

	restartOrEnd() {
		this.view.input.readCommand(commandInput => {
			Validation.checkValidCommand(commandInput);
			commandInput === '1' ? this.play() : this.endGame();
		});
	}

	endGame() {
		Console.close();
	}
}

module.exports = Controller;

const { ERROR_MESSAGE } = require('./constants');

const Validation = {
	checkDuplicates(num) {
		let isDuplicate = false;

		[...String(num)].map((char, idx) => {
			if (
				String(num)
					.slice(idx + 1)
					.includes(char)
			) {
				isDuplicate = true;
			}
		});

		return isDuplicate;
	},
	checkValidity(num) {
		if (isNaN(Number(num))) {
			throw new Error(ERROR_MESSAGE.TYPE_CHECK);
		}
		if (num.length !== 3) {
			throw new Error(ERROR_MESSAGE.LENGTH_CHECK);
		}
		if (this.checkDuplicates(num)) {
			throw new Error(ERROR_MESSAGE.DUPLICATE_CHECK);
		}
	},
	checkValidCommand(command) {
		if (command !== '1' && command !== '2') {
			throw new Error(ERROR_MESSAGE.INPUT_CHECK);
		}
	},
};

module.exports = Validation;

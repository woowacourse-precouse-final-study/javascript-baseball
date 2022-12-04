const {
	RESULT_MESSAGE: { BALL, STRIKE },
} = require('./constants');

const checkDuplicates = num => {
	[...String(num)].map((char, idx) => {
		if (
			String(num)
				.slice(idx + 1)
				.includes(char)
		)
			return true;
	});

	return false;
};

const generateResultString = (balls, strikes) => {
	let resultString = '';
	balls ? (resultString += `${balls}${BALL} `) : '';
	strikes ? (resultString += `${strikes}${STRIKE}`) : '';

	return resultString;
};

module.exports = { checkDuplicates, generateResultString };

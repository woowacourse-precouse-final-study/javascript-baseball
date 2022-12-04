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

module.exports = { checkDuplicates };

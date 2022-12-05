const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  RANDOM_LOWER_INCLUSIVE: 1,
  RANDOM_UPPER_INCLUSIVE: 9,
  generate() {
    return Random.pickNumberInRange(
      RandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
      RandomNumberGenerator.RANDOM_UPPER_INCLUSIVE
    )
  }
}

module.exports = RandomNumberGenerator;
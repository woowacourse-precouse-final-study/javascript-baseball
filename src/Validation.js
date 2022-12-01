const { Console } = require('@woowacourse/mission-utils');

const DUPLICATION_NUMBER_REGEXP = /([1-9])\1+/g
const IS_ZERO_REGEXP = /([0])/g
const NUMBER_REGEXP = /(\D)/g

const Validation = {
  isValidateInputNumber(number) {
    if (NUMBER_REGEXP.test(number)){
      Console.print('숫자를 입력하시길 바랍니다.');
      this.inputUserNumber('숫자를 입력하세요 :');
    }
    if (DUPLICATION_NUMBER_REGEXP.test(number)) {
      Console.print('중복되지 않으며, 0이 아닌 숫자를 입력해야합니다.');
      this.inputUserNumber('숫자를 입력하세요 :');
    }
    if (IS_ZERO_REGEXP.test(number)) {
      Console.print('0이 포함된 수는 입력할 수 없습니다');
      this.inputUserNumber('숫자를 입력하세요 :');
    }
    if (number.length !== 3){
      throw new Error('3자리 수를 입력해야합니다');
    }
  },

  isValidateGameOption(number) {
    if (number !== '1' && number !== '2'){
      throw new Error('1 또는 2를 입력해주세요');
    }
  }
}

module.exports = Validation;
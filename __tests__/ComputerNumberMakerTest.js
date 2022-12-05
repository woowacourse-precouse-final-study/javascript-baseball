const ComputerNumberMaker = require("../src/ComputerNumberMaker");
const ONE_TO_NINE_REGEXP = /[^1-9]/g;

describe("컴퓨터 난수 생성 테스트", () => {
  test("반환된 난수 배열의 길이가 3이어야 한다.", () => {
    expect(ComputerNumberMaker.makeComputerNumber()).toHaveLength(3);
  });
  test("반환된 난수 배열은 서로 다른 3개의 숫자여야 한다.", () => {
    const computerNumber = ComputerNumberMaker.makeComputerNumber();
    expect(new Set(computerNumber).size).toBe(3);
  });
  test("반환된 난수 배열은 1~9 사이의 숫자 3개여야 한다.", () => {
    const computerNumber = ComputerNumberMaker.makeComputerNumber();
    expect(computerNumber.filter(
        (item) => (ONE_TO_NINE_REGEXP.test(item))
      ).length).toBe(0);
  });
});

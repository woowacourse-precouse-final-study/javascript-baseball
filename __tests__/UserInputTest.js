const Validation = require("../src/Validation");

describe("사용자 게임 숫자 입력 유효성 검사", () => {
  test.each([["1"], ["12"], ["1234"]])(
    "3자리가 아니면 에러가 발생한다.",
    (input) => {
      expect(() => {
        Validation.userNumber(input);
      }).toThrow();
    }
  );
  test.each([["abc"], ["#@$"], [" "]])(
    "숫자가 아니면 에러가 발생한다.",
    (input) => {
      expect(() => {
        Validation.userNumber(input);
      }).toThrow();
    }
  );
  test("중복된 수면 에러가 발생한다.", () => {
    expect(() => {
      Validation.userNumber("122");
    }).toThrow();
  });
  test("1에서 9까지의 수가 아니면 에러가 발생한다.", () => {
    expect(() => {
      Validation.userNumber("012");
    }).toThrow();
  });
  test("올바른 값이 입력되면 아무 문제도 발생하지 않는다.", () => {
    expect(() => {
      Validation.userNumber("123");
    }).not.toThrow();
  });
});

describe("재시작/종료 입력 유효성 검사", () => {
  test.each([["3"], ["12"], ["@"], ["a"], [" "]])(
    "1이나 2외의 숫자가 입력되면 에러가 발생한다.",
    () => {
      expect((input) => {
        Validation.retryOrDone(input);
      }).toThrow();
    }
  );
  test.each([["1"], ["2"]])(
    "올바른 값이 입력되면 아무 문제도 발생하지 않는다.",
    (input) => {
      expect(() => {
        Validation.retryOrDone(input);
      }).not.toThrow();
    }
  );
});

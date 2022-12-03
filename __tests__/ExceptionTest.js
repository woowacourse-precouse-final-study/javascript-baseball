const IsvalidNumber = require("../src/util/IsValidNumber");

const isvalidNumber = new IsvalidNumber()

describe("사용자 입력값에 중복이 있으면 예외 발생", () => {
  test("중복이 있는 경우", () => {
    const input = [1,2,2];
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("중복되지 않는 숫자를 입력하세요.");
  });
});

describe("사용자 입력값이 세자리 초과이거나 미만일 경우 예외 발생", () => {
  test("세자리 초과일 경우", () => {
    const input = [1,2,3,4,5];
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("숫자 세자리 수를 입력하세요.");
  });

  test("세자리 미만일 경우", () => {
    const input = [1,2];
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("숫자 세자리 수를 입력하세요.");
  });

  test("공백일 경우", () => {
    const input = [""];
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("숫자 세자리 수를 입력하세요.");
  });
});

describe("숫자 외의 문자를 입력할 경우 에러 발생", () => {
  test("문자를 섞어쓴 경우", () => {
    const input = [1,2,"a"] ;
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("숫자만 입력하세요.");
  });

  test("문자만 쓴 경우", () => {
    const input = ["a","b","c"];
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("숫자만 입력하세요.");
  });

  test("특수문자를 섞어쓴 경우", () => {
    const input = ["1","!","2"];
    expect(()=>{
      isvalidNumber.isValidUserInput(input)
    }).toThrow("숫자만 입력하세요.");
  });
});

describe("3스트라이크일 경우 1과 2 외의 값을 입력할 경우 에러 발생", () => {
  test("1과 2 외의 값을 입력할 경우", () => {
    const input = "3";
    expect(()=>{
      isvalidNumber.isValidOptionNumber(input)
    }).toThrow("1 또는 2만 입력 가능합니다.");
  });

  test("문자를 입력할 경우", () => {
    const input = "a";
    expect(()=>{
      isvalidNumber.isValidOptionNumber(input)
    }).toThrow("1 또는 2만 입력 가능합니다.");
  });

  test("특수문자를 입력할 경우", () => {
    const input = "!";
    expect(()=>{
      isvalidNumber.isValidOptionNumber(input)
    }).toThrow("1 또는 2만 입력 가능합니다.");
  });  
});

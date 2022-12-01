const { generate } = require("./RandomNumberGenerator");

const ComputerNumberMaker = {
  THREE_DIGITS: 3,

  makeComputerNumber(){
    const computerNumber = [];
    while(computerNumber.length < this.THREE_DIGITS){
      const randomNumber = generate();
      if(!computerNumber.includes(randomNumber)){
        computerNumber.push(randomNumber);
      }
    }
    return computerNumber;
  }
}

module.exports = ComputerNumberMaker;
function plays(numbers) {
    const plays = [];
    for (let i = 0; i < numbers.length; i += 3) {
      plays.push(numbers.slice(i, i + 3));
    }
    return plays;
  }
  
function allequal(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] !== numbers[i + 1]) {
            return false;
      }
    }
    return true;
  }
  
function calculateSums(numbers) {
    const carlinhosNumbers = [];
    const equalizerNumbers = [];
    const deletedNumbers = [];
  
    plays(numbers).forEach((play) => {
      carlinhosNumbers.push(play[0]);
      equalizerNumbers.push(play[1]);
      deletedNumbers.push(play[2]);
    });
  
    const sumCarlinhos = carlinhosNumbers.reduce((sum, num) => sum + num, 0);
    const sumEqualizer = equalizerNumbers.reduce((sum, num) => sum + num, 0);
  
    return [sumCarlinhos, sumEqualizer];
  }
  
function determineResponse(numbers) {
    if (allequal(numbers)) {
      return "N";
    }
    const  [sumCarlinhos, sumEqualizer] = calculateSums(numbers);
    return sumCarlinhos === sumEqualizer ? "N" : "Y";
  }

const quantity = Number(prompt()) * 3;
const numbers = prompt()
    .split(" ").
    map(e => parseInt(e));
numbers.sort((a, b) => b + a);

console.log(determineResponse(numbers));

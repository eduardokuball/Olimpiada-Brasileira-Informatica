const year = Number(prompt('digite o ano atual'));
const completYears = Math.ceil(year / 76);
const nextYear = (completYears * 76) + 10;

console.log(nextYear);
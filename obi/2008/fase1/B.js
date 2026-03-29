const keyboard = new Map([
    [["A", "B", "C"], 2],   
    [["D", "E", "F"], 3],   
    [["G", "H", "I"], 4],
    [["J", "K", "L"], 5],
    [["M", "N", "O"], 6],
    [["P", "Q", "R", "S"], 7],
    [["T", "U", "V"], 8],
    [["W", "X", "Y", "Z"], 9]
]);

function findNumber(letter) {
    for (let [key, value] of keyboard) {
        if (key.includes(letter)) {
            return value;
        }
    }
    return false;
}

export default function convertToNumber(text) {
    let result = "";

    for (const letter of text) {
        if (letter === '-') {
            result += '-';
        } else if(findNumber(letter)){
            result += findNumber(letter);
        } else {
            result += letter;
        }
        
    }

    return result;
}
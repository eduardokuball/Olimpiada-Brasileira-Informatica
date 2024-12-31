const keyboard = new Map([
    [["A", "B", "C"], 2],   
    [["D", "E", "F"], 3],   
    [["G", "H", "I"], 4],
    [["J", "K", "L"], 5],
    [["M", "N", "O"], 6],
    [["P", "Q", "R","S"], 7],
    [["T", "U", "V"], 8],
    [["W", "X", "Y", "Z"], 9]
    
]);

function findNumber(keyboard,letter){
    for (let [key, value] of keyboard) {
        if(key.includes(letter)){
            return value;
        }
    }
};

function convertToNumber(criptografedNumber){
    let result = "";
    for(const letter of criptografedNumber){
        console.log(letter);
        if(letter == "-"){
            result += letter;
        }
        else {
            const number = findNumber(keyboard, letter);
            result += number;
        }
    }
    return result;
};

const criptografedNumber = prompt()
    .toUpperCase();

const convertedNumber = convertToNumber(criptografedNumber);

console.log(convertedNumber);
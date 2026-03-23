function isLetter(str) {
    return /^[A-Z]$/.test(str);
}

function isNumber(str) {
    return /^\d$/.test(str);
}

function oldPattern(plate){
    if(plate.length !== 8) {
        return false;
    } 

    const letters = plate.slice(0,3).split('');
    const numbers = plate.slice(4,8).split('');
    const allLetters = letters.every(letter => isLetter(letter));
    const allNumbers = numbers.every(number => isNumber(number));
    const hifen = plate[3] === "-";  

    const pattern = allLetters && allNumbers && hifen;
    return pattern;
};

function newPattern(plate){
    if(plate.length!== 7) {
        return false;
    }
    const letters = plate.slice(0,3).split('');
    const allLetters = letters.every(letter => isLetter(letter));
    const fourthCharacter = isNumber(plate[3]);
    const fifthCharacter = isLetter(plate[4]);
    const lasts = isNumber(plate[5]) && isNumber(plate[6]);

    const pattern = allLetters && fourthCharacter && fifthCharacter && lasts;
    return pattern;

}

function result(plate){
    if(oldPattern(plate)){
        return 1;
    } else if(newPattern(plate)){
        return 2;
    } else{
        return 0;
    }
};

const plate = prompt();

const plateType = result(plate);

console.log(result(plateType));
function decriptWord(string){
    let result = '';
    for(let i = 0; i < string.length; i++){
        if(i % 2 != 0){
            result += string[i];
        }
    }
    return result;
};

function decriptPhrase(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(decriptWord(array[i]));
    }
    return result.join(' ');
};

const string = prompt();
const array = string.split(' ');

console.log(decriptPhrase(array));
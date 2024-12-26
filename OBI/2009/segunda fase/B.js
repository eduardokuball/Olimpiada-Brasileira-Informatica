const [size, commands] = prompt('Digite o tamanho do vetor e os comandos')
.split(' ')
.map(Number);

const word = [];

for (let i = 0; i < size; i++) {
    word.push(i + 1);
};

const sums = [];

for(let i = 0; i < commands; i++) {
let [command, indexx,indexy ] = prompt(`Digite o comando ${i + 1}: trocar elemento, index, novo valor`)
.split(' ');
indexx = Number(indexx);
indexy = Number(indexy);
if(command == "I"){
    for(let j = 0; j < word.length; j++) {
        if(indexx >= indexy){
            break;
        } else {
            [word[indexx - 1], word[indexy - 1]] = [word[indexy - 1], word[indexx - 1]];
            indexx += 1;
            indexy -= 1;
        }
    }
} else if(command == "S"){
    let newArray = word.slice(indexx - 1,indexy);
    const sum = newArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    sums.push(sum);
}
}

console.log(sums.join('\n'));

const [lines,columns] = prompt("linhas e colunas")
.split(" ")
.map(Number);

const field = [];

for (let i = 0; i < lines; i++) {
    const row = prompt(`digite a ${i + 1} linha`)
    .split("");
    field.push(row);
};

const commands = Number(prompt('quantos comandos?'));
let shipsHit = 0;
for(let i = 0; i < commands; i++){
    const [x,y] = prompt('coordenada do comando')
    .split(' ')
    .map(Number);
    if(field[x - 1][y - 1] === '#'){
        shipsHit++;
    }
}

console.log(shipsHit);


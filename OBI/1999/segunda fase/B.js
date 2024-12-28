const persons = Number(prompt('Pessoas'));
const timeEntrance = prompt('horário da entrada')
.split(' ')
.map(Number);
const timeOut = prompt('horário da saída')
.split(' ')
.map(Number);

let simultaneousPeople = 0;

for (let i = 0; i < persons; i++) {
    for (let j = 0; j < persons; j++) {
        if (timeOut[i] > timeEntrance[j]){
            simultaneousPeople++;
        }
    }
}

simultaneousPeople = (simultaneousPeople - persons) / (persons - 1);

console.log(simultaneousPeople);
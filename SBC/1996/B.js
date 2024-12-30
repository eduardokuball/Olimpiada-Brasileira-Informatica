function AnalizeCircle() {
    const peoples = [];
    for (let i = 0; i < calls; i++) {
        const [firstpeople, secondPeople] = prompt("" + (i + 1) + ' chamada').split(' ');
        if (!peoples.includes(firstpeople)) {
            peoples.push(firstpeople);
        }
        if (!peoples.includes(secondPeople)) {
            peoples.push(secondPeople);
        }
    }
    return peoples.join(', ');
}

const [quantity, calls] = prompt()
    .split(' ')
    .map(e => parseInt(e));

console.log("Círculos de chamadas para o conjunto de dados 1:")
console.log(AnalizeCircle());
const [registers,maximumCapacity] = prompt('leituras e capacidade máxima')
.split(' ');
let exceeded = false;

let persons = 0;

for(let i = 0; i < registers; i++){
    const [descended,surged] = prompt('quantidade de pessoas que desceram e subiram')
    .split(' ')
    .map(Number);
    persons -= descended;
    persons += surged;
    if(persons > maximumCapacity){
        exceeded = true;
    }
}

console.log(exceeded ? 'S' : 'N');
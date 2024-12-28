const quantity = Number(prompt('digite a quantidade de depósitos feitos por vó vitória '));
let valuej = 0;
let valuez = 0;

const differences = [];

for (let i = 0; i < quantity; i++) {
    const [j, z] = prompt('digite o valor depositado para joão e zé')
    .split(' ')
    .map(Number);
    valuej += j;
    valuez += z;
    const difference = valuej - valuez;
    differences.push(difference);
}

console.log(differences.join('\n'));
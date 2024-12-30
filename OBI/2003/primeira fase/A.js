function distribution(quantity){
    let differences = [];
    for (let i = 0; i < quantity; i++) {
        const [j, z] = prompt()
        .split(' ')
        .map(e => parseInt(e));
        valuej += j;
        valuez += z;
        const difference = valuej - valuez;
        differences.push(difference);
    }
    return differences;
}

const quantity = Number(prompt());

let valuej = 0;
let valuez = 0;

const differences = distribution(quantity);


console.log(differences.join('\n'));
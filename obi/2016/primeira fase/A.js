function moves(input){
    const [ currentA,currentB,finalA,finalB ] = input;
    if(currentA != finalA && currentB != finalB){
        return 1;
    } else if(currentA != finalA && currentB == finalB){
        return 1;
    }
    return 2;
};

const input = prompt()
    .split(' ')
    .map(e => parseInt(e));


console.log(moves(input));
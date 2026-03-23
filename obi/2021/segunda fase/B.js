function contraction(){

    let changes = 0; 
    let i = 1;

    while (i < array.length - 1) {
        if (array[i] != array[array.length - i]) {
            if (array[i] < array[array.length - i]) {
                array[i] += array[i + 1];
                array.splice(i + 1, 1); 
            } else {
                array[array.length - i - 1] += array[array.length - i];
                array.splice(array.length - i, 1);
            }
            changes++; 
        } else {
            i++;
        }
    }
    return changes;
};

const n = parseInt(prompt());

const array = prompt()
    .split(' ', n)
    .map(e => parseInt(e));

//o exercicio fala que ele trata os indices do array de 1 a n para a formula
// então isso serve para tranformar os indices de 1 a n
array.unshift(null);


console.log(contraction());

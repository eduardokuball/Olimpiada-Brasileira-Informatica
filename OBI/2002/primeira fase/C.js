const foldingD = Number(prompt("Numero de vezes que a dobradura d foi feita"))

function calculateValue(n) {
    if(n == 0) return 4;
    let base = 3; 
    for (let i = 2; i <= n; i++) {
        base += Math.pow(2, i - 1); 
    }
    return Math.pow(base, 2);
}

console.log(calculateValue(foldingD));


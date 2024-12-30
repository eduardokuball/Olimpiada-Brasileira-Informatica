function chooseGroup() {
    if (winners >= 5) return 1;
    if (winners >= 3) return 2;
    return 3;
}

let winners = 0;

for (let i = 0; i < 6; i++) {
    const result = prompt().toUpperCase();
    if (result == "V") winners++;
}


console.log(chooseGroup());
const currentYear = Number(prompt('Digite o ano atual:'));

function nextHalleyYear(year) {
    const period = 76;
    const lastAppearance = 1986;
    
    let nextYear = lastAppearance;
    while (nextYear <= year) {
        nextYear += period;
    }
    
    return nextYear;
}

const nextYear = nextHalleyYear(currentYear);
console.log(nextYear);
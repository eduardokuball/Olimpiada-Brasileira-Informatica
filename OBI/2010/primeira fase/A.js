function nextHalleyYear(year) {
    const period = 76;
    const lastAppearance = 1986;
    
    let nextYear = lastAppearance;
    while (nextYear <= year) {
        nextYear += period;
    }
    
    return nextYear;
}

const currentYear = Number(prompt());

const nextYear = nextHalleyYear(currentYear);
console.log(nextYear);

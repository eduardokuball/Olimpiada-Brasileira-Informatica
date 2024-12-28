const [countrie,modalities] = prompt('Digite os países e modalidades')
.split(' ')
.map(Number);

const obj = [];

for (let i = 0; i < countrie; i++) {
    const objCountry = {
        country: i + 1,
        golden: 0,
        silver: 0,
        bronze: 0, 
    }
    obj.push(objCountry);
};

for(let i = 0; i < modalities; i++){
    const [gold, silver, bronze] = prompt('digite o relátorio das medalhas')
    .split(' ')
    .map(Number);
    obj.forEach((country) => {
        if(gold == country.country){
            country.golden += 1;
        }
        if(silver == country.country){
            country.silver += 1;
        }
        if(bronze == country.country){
            country.bronze += 1;
        }
    })
};

obj.sort((a, b) => {
    if (b.golden !== a.golden) {
        return b.golden - a.golden; 
    }
    if (b.silver !== a.silver) {
        return b.silver - a.silver; 
    }
    return b.bronze - a.bronze; 
});

let podium = '';

obj.forEach((country) => {
    podium += String(country.country) + ' ';
});

console.log(podium);

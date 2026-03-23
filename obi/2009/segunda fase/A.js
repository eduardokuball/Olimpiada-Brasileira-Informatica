function createCountry(countryId) {
    return {
        country: countryId,
        golden: 0,
        silver: 0,
        bronze: 0
    };
}

function updateMedals(countries, gold, silver, bronze) {
    countries.forEach((country) => {
        if (gold === country.country) country.golden++;
        if (silver === country.country) country.silver++;
        if (bronze === country.country) country.bronze++;
    });
}

function sortCountries(countries) {
    return countries.sort((a, b) => {
        if (b.golden !== a.golden) return b.golden - a.golden;
        if (b.silver !== a.silver) return b.silver - a.silver;
        return b.bronze - a.bronze;
    });
}

function generatePodium(countries) {
    return countries.map(country => country.country).join(' ');
}


const [countries, modalities] = prompt('Digite os países e modalidades')
    .split(' ')
    .map(Number);

const countryList = [];

for (let i = 0; i < countries; i++) {
        countryList.push(createCountry(i + 1));
}

for (let i = 0; i < modalities; i++) {
    const [gold, silver, bronze] = prompt('Digite o relatório das medalhas')
        .split(' ')
        .map(Number);
        updateMedals(countryList, gold, silver, bronze);
    }

const sortedCountries = sortCountries(countryList);

const podium = generatePodium(sortedCountries);

console.log(podium);



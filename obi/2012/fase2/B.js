function collectNumbersHome(homes){
    let numbers = [];
    for(let i = 0; i < homes; i++){
        numbers.push(Number(prompt()));
    }
    return numbers;
}

function housesWithToys(numbersOfHomes,sum){
    while(true){
        const randomIndex1 = Math.floor(Math.random() * numbersOfHomes.length);
        const randomIndex2 = Math.floor(Math.random() * numbersOfHomes.length);

        if(numbersOfHomes[randomIndex1] + numbersOfHomes[randomIndex2] === sum){
            return [numbersOfHomes[randomIndex1], numbersOfHomes[randomIndex2]];
        }
    }
};

const homes = Number(prompt());

const numbersOfHomes = collectNumbersHome(homes);

const sum = Number(prompt());


const homesWithToys = housesWithToys(numbersOfHomes,sum);

homesWithToys.sort((a, b) => a - b);

console.log(homesWithToys.join(' '));
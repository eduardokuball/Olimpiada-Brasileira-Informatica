function getPokemon(){
    const candiesPokemon = [];
    for(let i = 0; i < 3 ; i++){
        const candy = parseInt(prompt());
        candiesPokemon.push(candy);
    }
    return candiesPokemon.sort((a,b) => a - b);
};
function maxEvolutions(pokemonCandies,candies){
    let remainingCandies = candies;
    let evolutions = 0;
    for(let i = 0; i < pokemonCandies.length; i++){
        if(remainingCandies - pokemonCandies[i] >= 0){
            remainingCandies -= pokemonCandies[i];
            evolutions++;
        }
    }
    return evolutions;
};
const candies = parseInt(prompt());

const pokemonCandies = getPokemon();

const evolutions = maxEvolutions(pokemonCandies,candies);

console.log(evolutions);

function getTemperatures(meditions){
    let temperatures = [];
    for(let i = 0; i < meditions; i++){
        temperatures.push(parseInt(prompt()));
    }
    return temperatures;
};
function averages(temperatures){
    let averages = [];
    for(let i = 0; i < temperatures.length - (interval - 1); i++){
        const analising = temperatures.slice(i,i + interval);
        const sum = analising.reduce((acc, curr) => acc + curr, 0);
        const average = sum / analising.length;
        averages.push(Math.trunc(average));
    };
    averages.sort((a,b) => a - b);
    return [Math.min(...averages), Math.max(...averages)].join(' '); 
};

const [meditions, interval] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const temperatures = getTemperatures(meditions);

const averagesTemperatures = averages(temperatures);

console.log(averagesTemperatures);

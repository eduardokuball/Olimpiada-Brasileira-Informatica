function ruleOfThree(grams, price){

    return (grams * 1000) / price

};

export default function values(valuesData){
  
    const prices = [];

    valuesData.forEach((data) => {
        const value = ruleOfThree(data[0], data[1]);
        prices.push(value);
    });

    return Number(Math.min(...prices).toFixed(2));
}
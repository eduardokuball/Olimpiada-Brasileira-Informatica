function eldestSon(){
    const ageOtherSon = ageMonic - (ageFirstSon + ageSecondSon);
    return Math.max(ageOtherSon, ageFirstSon, ageSecondSon);
};

const ageMonic = parseInt(prompt());
const ageFirstSon = parseInt(prompt());
const ageSecondSon = parseInt(prompt());

console.log(eldestSon());

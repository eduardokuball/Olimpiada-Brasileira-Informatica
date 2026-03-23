function getBoots(quantity){
    let boots = [];
    let stringBoots = [];
    for(let i = 0; i < quantity; i++){
        const [size,foot] = prompt()
        .split(' ');
        if(!boots.includes(size)) boots.push(size);
        stringBoots.push(String(size) + String(foot.toUpperCase()));
    }
    return [boots,stringBoots];
};

function countPairs(bootSizes,bootStrings){
    let pairs = 0;
    for(let i = 0; i < bootSizes.length; i++){
        if(bootStrings.includes(bootSizes[i] + 'D') && bootStrings.includes(bootSizes[i] + 'E')){
            pairs++;
        }
    }
    return pairs;
};

const quantity = parseInt(prompt());

const [bootSizes, bootStrings] = getBoots(quantity);

console.log(countPairs(bootSizes,bootStrings));

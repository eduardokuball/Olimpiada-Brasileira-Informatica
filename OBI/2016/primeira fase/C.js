function getHeihts(sections){
    const heihts = [];
    for(let i = 0; i < sections; i++){
        heihts.push(parseInt(prompt()));
    }
    return heihts;
};

function floodedSections(heihts){
    let sectionsFlooded = 0;
    for(let i = 0; i < heihts.length; i++){
        if(isFlooded(heihts, i)) sectionsFlooded++;
    }
    return sectionsFlooded;
}

function mostHeight(item,array){
    for(let i = 0; i < array.length; i++){
        if(array[i] > item) return true;
    }
    return false;
};

function isFlooded(heights,i){
    let flooded = false;
    if(i > 0 && i < heights.length - 1){
        const left = heights.slice(0,i);
        const right = heights.slice(i + 1, heights.length);
        
        if(mostHeight(heights[i], left) && mostHeight(heights[i], right)){
            flooded = true;
        }
    };
    return flooded;
};

const sections = parseInt(prompt());

const heihts = getHeihts(sections);

console.log(floodedSections(heihts));






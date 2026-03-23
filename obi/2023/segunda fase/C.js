function getSequency(size){
    const sequency = [];
    for(let i = 1; i <= size; i++){
        const item = Number(prompt());
        sequency.push(item);
    }
    return sequency;
};

function intervals(sequency){
    let [index,sizeSequence] = [0,0];
    let [itens, sizeIntervals] = [[],[]];
    while(index < sequency.length - 1){
        for(let i = index; i < sequency.length; i++){
            if(itens.includes(sequency[i])){
                sizeIntervals.push(sizeSequence);
                sizeSequence = 1;
                itens = [sequency[i]];
            } else {
                sizeSequence++;
                itens.push(sequency[i]);
            }
        }
        index++;
        sizeIntervals.push(sizeSequence);
    }
    return sizeIntervals;
};

function mostInterval(sizeIntervals){
    return Math.max(...sizeIntervals);
};

const size = Number(prompt());

const sequency = getSequency(size);

const sizeIntervals = intervals(sequency);

const mostIntervalSize = mostInterval(sizeIntervals);

console.log(mostIntervalSize);
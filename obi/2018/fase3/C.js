function operation1(buckets,ball,i){
    buckets[i].push(ball);
};

function operation2(buckets, start, end){
    const sliced = buckets.slice(start, end + 1);
    
    let aux = null;
    let min = 10 ** 6;
    let max = 1;

    for (let i = 0; i < sliced.length; i++) {
        const currentMax = Math.max(...sliced[i]);
        if (currentMax > max) {
            max = currentMax;
            aux = i;
        }
    }

    for (let i = 0; i < sliced.length; i++) {
        const currentMin = Math.min(...sliced[i]);
        if (currentMin < min && i !== aux) {
            min = currentMin;
        }
    }

    return max - min;
}

export default function operations(bucketsInput, operations){
    let buckets = [...bucketsInput];

    const result = [];

    operations.forEach((o) => {
        if(o.type == 1){
            operation1(buckets, o.ball, o.i)
        } else {
            const value = operation2(buckets, o.start, o.end);
            result.push(value);
        }
    })

    return result;

}
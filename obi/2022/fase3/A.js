export default function balancing(weights){

    const adjustedWeight = (weights.reduce((a,b) => a + b, 0)) / weights.length;

    const results = weights.map((e) => {
        return adjustedWeight - e;
    })

    return results;
}
export default function distribution(quantity, rounds) {
    
    let valuej = 0;
    let valuez = 0;

    const differences = [];

    for (let i = 0; i < quantity; i++) {
        const [j, z] = rounds[i];

        valuej += j;
        valuez += z;

        differences.push(valuej - valuez);
    }
    return differences;
}
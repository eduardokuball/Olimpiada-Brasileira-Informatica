function pontuation(powers, power, n) {
    let ini = 0;
    let fim = n;

    while (fim - ini > 1) {
        const med = Math.floor((fim + ini) / 2);

        if (powers[med] <= power) {
            ini = med;
        } else {
            fim = med;
        }
    }

    return fim - 1;
}

export default function solve(strips, powers, pontuations, ogros) {

    const adjustedPowers = [0, ...powers];

    const result = [];

    for (const o of ogros) {
        const index = pontuation(adjustedPowers, o, strips);
        result.push(pontuations[index]);
    }

    return result;
}
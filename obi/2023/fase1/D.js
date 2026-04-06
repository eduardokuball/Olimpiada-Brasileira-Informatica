export default function countValidTours(tunnels, tours) {
    const tunnelSet = new Set();

    for (const [a, b] of tunnels) {
        tunnelSet.add(`${a}-${b}`);
        tunnelSet.add(`${b}-${a}`);
    }

    let validCount = 0;

    for (const tour of tours) {
        let isValid = true;

        for (let i = 0; i < tour.length - 1; i++) {
            const key = `${tour[i]}-${tour[i + 1]}`;

            if (!tunnelSet.has(key)) {
                isValid = false;
                break;
            }
        }

        if (isValid) validCount++;
    }

    return validCount;
}


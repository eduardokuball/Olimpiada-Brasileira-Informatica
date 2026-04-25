// Main Function
export default function mechanicalWorkshop(cars, mechanics) {
    const queue = cars.toSorted((a, b) => a - b);
    const speeds = mechanics.toSorted((a, b) => b - a);
    const times = Array(mechanics.length).fill(0).map(() => []);

    while (queue.length > 0) {
        for (let i = 0; i < times.length; i++) {
            const car = queue.shift();
            const last = times[i].at(-1) || 0;
            const time = last + (car * speeds[i]);
            times[i].push(time);
        }
    }

    let total = 0;
    for (const mechanic of times) {
        mechanic[mechanic.length - 1] = 0;
        const sum = mechanic.reduce((acc, e) => acc + e, 0);
        total += sum;
    }
    return total;
}

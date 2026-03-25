export default function temperatureAnalysis(interval, temperatures) {

    console.log(interval);
    console.log(temperatures);

    const averages = [];

    for (let i = 0; i < temperatures.length - (interval - 1); i++) {
        const analising = temperatures.slice(i, i + interval);
        const sum = analising.reduce((acc, curr) => acc + curr, 0);
        const average = sum / analising.length;

        averages.push(Math.trunc(average));
    }

    averages.sort((a, b) => a - b);

    return `${Math.min(...averages)} ${Math.max(...averages)}`;
}
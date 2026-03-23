export default function simultaneousPeople(lines) {
    console.log(lines);
    const persons = parseInt(lines[0]);

    const timeEntrance = lines[1]
        .split(' ')
        .map(Number);

    const timeOut = lines[2]
        .split(' ')
        .map(Number);

    let simultaneousPeople = 0;

    for (let i = 0; i < persons; i++) {
        for (let j = 0; j < persons; j++) {
            if (timeOut[i] > timeEntrance[j]) {
                simultaneousPeople++;
            }
        }
    }

    return (simultaneousPeople - persons) / (persons - 1);
}
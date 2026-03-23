function simultaneousPeople(timeEntrance=[],timeOut=[]){
    let simultaneousPeople = 0;

    for (let i = 0; i < persons; i++) {
        for (let j = 0; j < persons; j++) {
            if (timeOut[i] > timeEntrance[j]){
                simultaneousPeople++;
        }
    }
}
    return (simultaneousPeople - persons) / (persons - 1);

}

const persons = Number(prompt());
const timeEntrance = prompt()
    .split(' ')
    .map(e => parseInt(e));
const timeOut = prompt()
    .split(' ')
    .map(e => parseInt(e));

console.log(simultaneousPeople(timeEntrance,timeOut));
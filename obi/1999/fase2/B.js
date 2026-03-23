export default function simultaneousPeople(timeEntrance=[],timeOut=[], persons){
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


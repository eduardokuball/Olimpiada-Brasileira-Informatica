// Main Function
export default function transport(students, maxTime, minutes = []) {
    let initial = 0; // Index 0
    let waiting = 0;
    let busCounter = 1;
    
    if (students === 0) return 0;
    
    for (let i = 0; i < (students - 1); i++) {
        const increment = minutes[i + 1] - minutes[i];

        if (waiting + increment > maxTime) {
            busCounter++;
            waiting = 0;
            initial = i;
            continue;
        }

        waiting += increment;
    }

    return busCounter;
}

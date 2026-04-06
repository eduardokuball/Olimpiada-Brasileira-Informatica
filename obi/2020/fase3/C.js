export default function calculateInfluenceIndex(messageIndexes) {

    let influenceIndexCounter = 1;
    let influenceIndex = 0;

    const count = (arr, callback) => {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], i, arr)) counter++;
        }
        return counter;
    };

    for (const _ of messageIndexes) {
        const number = count(
            messageIndexes,
            (e) => e >= influenceIndexCounter
        );

        if (number >= influenceIndexCounter) {
            influenceIndex = influenceIndexCounter;
        }

        influenceIndexCounter++;
    }

    return influenceIndex;
}
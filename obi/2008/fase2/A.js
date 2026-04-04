const panelsForRoad = new Map([
    [["D"], 0],   
    [["P", "C"], 2],
    [["A"], 1] 
]);

function calculatePanels(command) {
    for (let [key, value] of panelsForRoad) {
        if (key.includes(command)) {
            return value;
        }
    }
    return 0;
}

export default function countPanels(relatory) {
    let totalPanels = 0;

    for (const command of relatory) {
        totalPanels += calculatePanels(command);
    }

    return totalPanels;
}
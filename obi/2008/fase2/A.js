const panelsForRoad = new Map([
    [["D"], 0],   
    [["P","C"], 2],
    [["A"], 1] 
]);

function calculatePanels(panelsForRoad,command){
    for(let [key,value] of panelsForRoad){
        if(key.includes(command)){
            return value;
        }
    }
    return 0;
};

const commands = Number(prompt())
const relatory = prompt()
    .split('', commands)
    .map(e => e.toUpperCase());

function coountPanels(relatory){
    let totalPanels = 0;
    for(const command of relatory){
        totalPanels += calculatePanels(panelsForRoad, command);
    }
    return totalPanels;
};

const panels = coountPanels(relatory);

console.log(panels);
function generateJungle(trees){
    const jungle = [];
    for(let i = 0; i < trees; i++){
        const tree = createTree();
        jungle.push(tree);
    }
    return jungle;
};

function createTree(){
    const [x,y] = prompt()
        .split(' ')
        .map(e => parseInt(e));

    const tree = {
        "x": x,
        "y": y
    };
    
    return tree;
};

function patrol(tree1,tree2,reach){
    const distancetree1 = tree1.x + tree1.y;
    const distancetree2 = tree2.x + tree2.y;

    if(distancetree2 - distancetree1 <= reach){
        return true;
    }
    return false;
};

function patrolInJungle(jungle=[],reach){
    let isPatroling = true;
    for(let i = 0; i < jungle.length - 1; i++){
        if(!patrol(jungle[i], jungle[i + 1], reach)){
            isPatroling = false
            break;
        }
    }
    return isPatroling;
}

const [trees, reach] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const jungle = generateJungle(trees);
const isPatroling = patrolInJungle(jungle, reach);

console.log(isPatroling? "S" : "N");


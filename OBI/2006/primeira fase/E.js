let piles = Number(prompt('digite a quantidade de pilhas'));
let rocks = prompt('digite quantas pedras há em cada pilha')
.split(' ')
.map(Number);
let perfectStair = [];

for(let i = 0; i < piles; i++){
    perfectStair.push(rocks[i]);
};

function redistribution(){
    for(let i = 0; i < 100; i++){
        for(let i = 0; i < piles; i++){
            if(perfectStair[i] >= perfectStair[i + 1]){
                perfectStair[i]--;
                perfectStair[i + 1]++;
            } else if(perfectStair[i + 1] - perfectStair[i] > 1){
                perfectStair[i]++;
                perfectStair[i + 1]--;
            }
        }
    }
    return perfectStair;
}
function IsPerfectStairs(rocks){
    for(let i = 0; i < rocks.length - 1; i++){
        if(rocks[i] >= rocks[i + 1]){
            return false;
        }
    }
    return true;
};

function moves(){
    let movesrocks = 0;
    perfectStair = redistribution();
    for(let i = 0; i < piles; i++){
    let quantity = rocks[i] - perfectStair[i];
        if(quantity < 0){
            movesrocks += quantity * -1;
        } else {
            movesrocks += quantity;
        }
    };
    return movesrocks / 2;
};

function response(){
    perfectStair = redistribution();
    if(IsPerfectStairs(perfectStair)){
        return moves();

    } else {
        return -1;
    }
};

console.log(response());







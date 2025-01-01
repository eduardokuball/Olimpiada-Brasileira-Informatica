function didHitCircle(x, y, radius) {
    const distance = Math.sqrt(x ** 2 + y ** 2);
    return distance <= radius;
};
function collectRadius(circles){
    const radius = [];
    for (let i = 0; i < circles; i++) {
        radius.push(parseInt(prompt()));
    }
    return radius;
};

function score(radius,shots){
    let score = 0;
    for(let i = 0; i < shots; i++){
        const [x, y] = prompt()
            .split(' ')
            .map(e => parseInt(e));
        if(didHitCircle(x, y, radius[0])){
            score += 3;
        } else if(didHitCircle(x, y, radius[1])){
            score += 2;
        } else if(didHitCircle(x, y, radius[2])){
            score += 1;
        }
    }
    return score;
};

const [circles,shots] = prompt()
   .split(' ')
    .map(e => parseInt(e));

const radius = collectRadius(circles);

const scoreOfShots = score(radius,shots);

console.log(scoreOfShots);



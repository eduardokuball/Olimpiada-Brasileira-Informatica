const [registers, maximumDistance] = prompt('quantidade de regiostros e distância permitida')
.split(' ')
.map(Number);

let x = 0;
let y = 0;
let isRape = false;

for(let i = 0; i < registers; i++){
    const [direction,distance] = prompt('direção e distância do deslocamento')
    .split(' ');
    if(direction == "N"){
        y += Number(distance);
    } else if(direction == "S"){
        y -= Number(distance);
    } else if(direction == "O"){
        x -= Number(distance);
    } else if(direction == "L"){
        x += Number(distance);
    }
    const euclideanDistance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if(euclideanDistance > maximumDistance){
        isRape = true;
    }
};

console.log(isRape ? 1 : 0);
function Rotatemattress(a,b,c){
    const patterns = []; 

    const pattern1 = {
        mattressHeight : c,
        mattresWidth : a,
    };

    const pattern2 = {
        mattressHeight : c,
        mattresWidth : b,
    };

    const pattern3 = {
        mattressHeight : a,
        mattresWidth : b,
    }

    const pattern4 = {
        mattressHeight : a,
        mattresWidth : c,
    }

    
    const pattern5 = {
        mattressHeight : b,
        mattresWidth : a,
    }

    patterns.push(pattern1, pattern2, pattern3, pattern4,pattern5);
    return patterns;
}

function passByTheDoor(){
    const patterns = Rotatemattress(a,b,c);
    let passByTheDoor = false;
    patterns.forEach((pattern) => {
        if (pattern.mattresWidth <= doorWidth && pattern.mattressHeight <= doorHeight){
            passByTheDoor = true;
        }
    })
    return passByTheDoor;
}

const [a,b,c] = prompt()
    .split(' ')
    .map(e => parseInt(e))

const [doorHeight, doorWidth] = prompt()
    .split(' ')
    .map(e => parseInt(e))


if (passByTheDoor()){
    console.log('S');
} else {
    console.log('N');
}


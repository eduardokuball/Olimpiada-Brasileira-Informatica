function getCode(lines){
    const code = [];
    for(let i = 0; i < lines; i++){
        const line = prompt()
            .split('')
        code.push(line);
    }
    return code.flat();
};

function balanced(code){
    let openKeys = 0;
    let closeKeys = 0;
    let first = false;
    for(let i = 0; i < code.length; i++){
        if(code[i] == '{'){
            openKeys++;
            if(!first) first = "{";
        }
        if(code[i] == "}"){
            closeKeys++;
            if(!first) first = "}";
        }
    }
    if(openKeys == 0 && closeKeys == 0) return 'S';
    if(openKeys == closeKeys && first == "{") return 'S';
    return 'N';
};

const lines = parseInt(prompt());

const code = getCode(lines);

console.log(balanced(code));


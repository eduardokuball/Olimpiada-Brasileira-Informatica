const quantity = Number(prompt('Quantidade de trechos'));
const description = prompt('Descrição do trecho').toUpperCase().slice(0,quantity);
let panels = 0;


function getPanel(){
    for(const letter of description){
        if(letter == "C" || letter == "P"){
            panels += 2;
        } else if(letter == "A"){
            panels += 1;
        } 
    }
    return panels;
};

console.log(getPanel());
function getPanel(){
    let panels = 0;
    for(const letter of description){
        if(letter == "C" || letter == "P"){
            panels += 2;
        } else if(letter == "A"){
            panels += 1;
        } 
    }
    return panels;
};

const quantity = Number(prompt());
const description = prompt()
    .toUpperCase()
    .slice(0,quantity);



console.log(getPanel());
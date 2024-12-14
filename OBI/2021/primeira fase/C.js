let quantity = Number(prompt('número de registros'));

let registers = [];
let friends = [];

for(let i = 0; i < quantity; i++){
    let register = prompt('tipo de registro e pessoa/tempo').split(' ');
    let typeRegister = register[0].toUpperCase();
    let personOrTime = register[1];
    registers.push({
        type: typeRegister,
        personOrTime: personOrTime
    });
    if(typeRegister == 'R' && !friends.includes(personOrTime)){
        friends.push(personOrTime);
    }
};

let timesAnswers = [];
friends.forEach((f) => {
    let time = 0;
    let answered = false;
    let AlreadySentAMessage = false;
    let isT = false;
    registers.forEach((r) => {
        if(r.type == 'R' && r.personOrTime == f){
            answered = false;
            if(!AlreadySentAMessage){
                time = 0;
                AlreadySentAMessage = true;
            } 
            isT = false;
        } else if(r.type == 'T' ){
            time += Number(r.personOrTime);
            isT = true;
        } else if(r.type == 'E' && r.personOrTime == f){
            answered = true;
            if(!isT){
                time++;
            }
        } else if(r.type == 'E' && r.personOrTime != f){
                time++;
        }
    })
    if(answered){
        timesAnswers.push(time);
    } else {
        timesAnswers.push(-1);
    }
});

for(i = 0; i < timesAnswers.length; i++){
    console.log(friends[i] + ':'+ timesAnswers[i]);
};

console.log(timesAnswers);
let quantity = prompt('Digite a quantidade de amigos');

let friends = prompt('Digite os nomes dos amigos separados por espaço')
.split(' ');

let obj = [];
let friendshipsMade = [];

for (let i = 0; i < friends.length; i++) {
    let requirement = Number(prompt('Digite o número de exigências de ' + friends[i] + ": "));
    if (requirement > 0) {
        let requirements = prompt('Digite as exigências separadas por espaço')
        .split(' ');
        obj.push({
            name: friends[i],
            requirements: requirements
        });
    } else {
        friendshipsMade.push(friends[i]);
    }
}

for (let j = 0; j < quantity; j++) {
    obj.forEach((o, index) => {
        let allRequirementsMet = o.requirements.every(r => friendshipsMade.includes(r));

        if (allRequirementsMet) {
            friendshipsMade.push(o.name);
            obj.splice(index, 1); 
        }
    });
}

if(friendshipsMade.length < quantity){
    console.log('impossivel');
} else {
    console.log(friendshipsMade.join(' '));
}

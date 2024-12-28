const [participants, requiredNote] = prompt('participantes e nota')
.split(' ')
.map(Number);
let approved = 0;

for(let i = 0; i < participants; i++){
    const [note1,note2] = prompt('notas')
    .split(' ')
    .map(Number);
    if(note1 + note2 >= requiredNote){
        approved++;
    }
};

console.log(approved);


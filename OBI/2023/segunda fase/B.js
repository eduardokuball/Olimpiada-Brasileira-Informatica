let [students,together,separate] = prompt('estudantes, duplas juntas e duplas separadas')
.split(' ')
.map(Number);
let studentstogether = [];
let studentsseparate = [];
for(let i = 0; i < together; i++){
    let[p1,p2] = prompt('digite a dupla que quer fazer junto')
    .split(' ')
    .map(Number);;
    studentstogether.push([p1,p2]);
};

for(let i = 0; i < separate; i++){
    let[p1,p2] = prompt('digite a dupla que quer fazer separada')
    .split(' ')
    .map(Number);
    studentsseparate.push([p1,p2]);
};

let groupsStudents = [];

for(let i = 0; i < students / 3; i++){
    let trio = prompt('digite o trio separado por espaço')
    .split(' ')
    .map(Number);
    groupsStudents.push(trio);
};

let violations = 0;

groupsStudents.forEach((g) => {
    studentsseparate.forEach((s) => {
        if(g.includes(s[0]) && g.includes(s[1])){
            violations ++;
        }
    })
});

studentstogether.forEach((s) => {
    let searching = false;
    groupsStudents.forEach((g) => {
        if(g.includes(s[0]) && g.includes(s[1])){
            searching = true;
        }
    })
    if(!searching){
        violations ++;
    }
})

console.log(violations);
let students = Number(prompt('digite a quantidade de alunos'));
let report = [];
let notes = [];

for(let i = 0; i < students; i++){
    let [student,note] = prompt('código do aluno e sua nota')
    .split(' ')
    .map(Number);
    report.push({
        student: student,
        note: note,
    });
    notes.push(note);
};

let mostNote = Math.max(... notes);

let studentsWithMostNote = report.filter(e => e.note === mostNote);

let studentsReturn = "";

studentsWithMostNote.forEach((s) => {
    studentsReturn += `${s.student} `;
})

console.log(studentsReturn);;
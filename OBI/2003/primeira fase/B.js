const students = Number(prompt('digite a quantidade de alunos'));
const report = [];
const notes = [];

for (let i = 0; i < students; i++) {
    const [student, note] = prompt('código do aluno e sua nota')
    .split(' ')
    .map(Number);
    report.push({
        student: student,
        note: note,
    });
    notes.push(note);
}

const mostNote = Math.max(...notes);

const studentsWithMostNote = report.filter(e => e.note === mostNote);

let studentsReturn = "";

studentsWithMostNote.forEach((s) => {
    studentsReturn += `${s.student} `;
})

console.log(studentsReturn);
// Função para coletar os dados dos alunos
function collectReport(students) {
    const report = [];
    const notes = [];
    for (let i = 0; i < students; i++) {
        const [student, note] = prompt('código do aluno e sua nota')
            .split(' ')
            .map(Number);
        report.push({ student, note });
        notes.push(note);
    }
    return  [report, notes];
}

function findHighestNote(notes) {
    return Math.max(...notes);
}

function findStudentsWithHighestNote(report, mostNote) {
    return report.filter(e => e.note === mostNote);
}

function formatStudentsList(studentsWithMostNote) {
    return studentsWithMostNote.map(s => s.student).join(' ');
}

const students = Number(prompt());

const [report, notes] = collectReport(students);

const mostNote = findHighestNote(notes);

const studentsWithMostNote = findStudentsWithHighestNote(report, mostNote);

const studentsReturn = formatStudentsList(studentsWithMostNote);

console.log(studentsReturn);

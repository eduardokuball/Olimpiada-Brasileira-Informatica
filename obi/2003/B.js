export default function bestStudents(report) {

    console.log(report);

    let maxNote = -Infinity;

    report.forEach((r) => {
        if (r.note > maxNote) {
            maxNote = r.note;
        }
    });

    const studentsWithMax = report
        .filter(r => r.note === maxNote)
        .map(r => r.student);

    return studentsWithMax.join(' ');
}
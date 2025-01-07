function cutOffGrade(grades,min){
    let grade = grades;
    grade.sort((a,b) => b - a);
    grade = grade.slice(0,min);
    return grade[grade.length - 1];
};

const [quantityNotes,min] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const grades = prompt()
    .split(' ', quantityNotes)
    .map(e => parseInt(e));

const cutGrade = cutOffGrade(grades,min);

console.log(cutGrade);
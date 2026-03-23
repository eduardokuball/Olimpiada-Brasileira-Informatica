function List(students){
    let presenceList = [];
    for(let i = 0; i < students; i++){
        const student = Number(prompt());
        presenceList.push(student);
    }
    return presenceList;
};

function removeRepetitions(presenceList=[]){
    const uniqueList = [...new Set(presenceList)];
    return uniqueList;
};

function countStudents(uniqueList=[]){
    return uniqueList.length;
}

const students = Number(prompt(''));


const presenceList = List(students);
const uniqueList = removeRepetitions(presenceList);
const count = countStudents(uniqueList);

console.log(count);
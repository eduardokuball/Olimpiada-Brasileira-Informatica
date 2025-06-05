const students = parseInt(prompt());

const requirements = [];

for (let i = 0; i < students; i++) {
    const input = prompt()
        .split(' ')
        .map((e) => {
            return parseInt(e);
        });

    const obj = {
        id: i + 1,
        requirement: input.slice(1) 
    };

    requirements.push(obj);
}

const verify = (dislikes, team) => !dislikes.some(person => team.includes(person));

const teamA = [1];
const teamB = [];

requirements.forEach((student) => {
    if (student.id === 1) return; 

    if (verify(student.requirement, teamA)) {
        teamA.push(student.id);
    } else if (verify(student.requirement, teamB)) {
        teamB.push(student.id);
    }
});

console.log(teamA.join(''));
console.log(teamB.join(' '));

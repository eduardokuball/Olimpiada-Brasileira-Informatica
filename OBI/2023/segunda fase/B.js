function getStudentPairs(count) {
    const pairs = [];
    for (let i = 0; i < count; i++) {
        const [p1, p2] = prompt()
            .split(' ')
            .map(e => parseInt(e));
        pairs.push([p1, p2]);
    }
    return pairs;
}

function getGroups(studentCount) {
    const groups = [];
    for (let i = 0; i < studentCount / 3; i++) {
        const trio = prompt()
            .split(' ')
            .map(e => parseInt(e));
        groups.push(trio);
    }
    return groups;
}

function countSeparationsViolations(groups, separations) {
    let violations = 0;
    groups.forEach((group) => {
        separations.forEach((pair) => {
            if (group.includes(pair[0]) && group.includes(pair[1])) {
                violations++;
            }
        });
    });
    return violations;
}

function countTogethernessViolations(groups, togetherness) {
    let violations = 0;
    togetherness.forEach((pair) => {
        let found = false;
        groups.forEach((group) => {
            if (group.includes(pair[0]) && group.includes(pair[1])) {
                found = true;
            }
        });
        if (!found) {
            violations++;
        }
    });
    return violations;
}

const [students, together, separate] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const studentstogether = getStudentPairs(together);
const studentsseparate = getStudentPairs(separate);
const groupsStudents = getGroups(students);

const separationsViolations = countSeparationsViolations(groupsStudents, studentsseparate);
const togethernessViolations = countTogethernessViolations(groupsStudents, studentstogether);

const totalViolations = separationsViolations + togethernessViolations;

console.log(totalViolations);
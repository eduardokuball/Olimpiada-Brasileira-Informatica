export default function countGroupViolations(groups, togetherPairs, separatePairs) {
    const studentGroup = new Map();

    groups.forEach((group, index) => {
        for (const student of group) {
            studentGroup.set(student, index);
        }
    });

    let violations = 0;

    for (const [a, b] of togetherPairs) {
        if (studentGroup.get(a) !== studentGroup.get(b)) {
            violations++;
        }
    }

    for (const [a, b] of separatePairs) {
        if (studentGroup.get(a) === studentGroup.get(b)) {
            violations++;
        }
    }

    return violations;
}


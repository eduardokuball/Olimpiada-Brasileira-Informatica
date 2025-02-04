const associations = parseInt(prompt());

const associationsPasswords = []

for (let i = 0; i < associations; i++) {
    const lineInput = prompt().split(' ', 16);

    const association = lineInput.slice(0, 10);
    const password = lineInput.slice(10);

    associationsPasswords.push({
        association: generateAssociationMap(association),
        password: password
    });
}


function generateAssociationMap(association) {
    const [
        a1, a2,
        b1, b2,
        c1, c2,
        d1, d2,
        e1, e2
    ] = association;

    return {
        'A': [a1, a2],
        'B': [b1, b2],
        'C': [c1, c2],
        'D': [d1, d2],
        'E': [e1, e2]
    };
}

function generateAllPossibilites(association, password, index = 0, current = []) {
    if (index === password.length) return [current.join(' ')];

    const DIGIT = password[index];
    const [p1, p2] = association[DIGIT];

    const forkA = generateAllPossibilites(association, password, index + 1, [...current, p1]);
    const forkB = generateAllPossibilites(association, password, index + 1, [...current, p2]);

    return [...forkA, ...forkB];
}

function findCommonPass(associationsPasswords) {
    const { association, password } = associationsPasswords[0];
    let commonPasswords = generateAllPossibilites(association, password)

    associationsPasswords.forEach(({ association, password }, i) => {
        if (i === 0) return;

        const currentPossibility = generateAllPossibilites(association, password);
        commonPasswords = commonPasswords.filter(e => currentPossibility.includes(e));
    });
    
    return commonPasswords;
}

const commonPasswords = findCommonPass(associationsPasswords);

console.log(commonPasswords[0]);

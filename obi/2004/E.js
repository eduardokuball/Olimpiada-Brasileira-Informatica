export default function findCommonPassword(associationsPasswords) {

    function generateAllPossibilities(association, password, index = 0, current = []) {
        if (index === password.length) {
            return [current.join(' ')];
        }

        const digit = password[index];
        const [p1, p2] = association[digit];

        const forkA = generateAllPossibilities(association, password, index + 1, [...current, p1]);
        const forkB = generateAllPossibilities(association, password, index + 1, [...current, p2]);

        return [...forkA, ...forkB];
    }

    function findCommonPass(associationsPasswords) {
        const { association, password } = associationsPasswords[0];

        let commonPasswords = generateAllPossibilities(association, password);

        associationsPasswords.forEach(({ association, password }, i) => {
            if (i === 0) return;

            const currentPossibility = generateAllPossibilities(association, password);

            commonPasswords = commonPasswords.filter(e =>
                currentPossibility.includes(e)
            );
        });

        return commonPasswords;
    }

    const result = findCommonPass(associationsPasswords);
    return result[0];
}
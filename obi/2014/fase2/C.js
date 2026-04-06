export default function validateSequence(aValues = [], bValues = []) {
    const a = new Set(aValues);
    const countedB = new Set();

    let isValid = true;
    let invalid = 0;

    for (let i = 0; i < bValues.length; i++) {
        const current = bValues[i];
        let validCase = false;

        if (a.has(current)) {
            validCase = true;
        } 
        else {
            for (const prev of countedB) {
                if (countedB.has(current - prev)) {
                    validCase = true;
                    break;
                }
            }
        }

        if (validCase) {
            countedB.add(current);
        } else {
            isValid = false;
            invalid = current;
            break;
        }
    }

    return isValid ? "sim" : invalid;
}
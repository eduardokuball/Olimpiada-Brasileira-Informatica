export default function validateBracketsSequences(lines = []) {
    const results = [];

    for (let i = 0; i < lines.length; i++) {
        const stack = [];
        const line = lines[i].trim();
        let isValid = true;

        for (const char of line) {
            if (char === '{') {
                stack.push('}');
            } else if (char === '[') {
                stack.push(']');
            } else if (char === '(') {
                stack.push(')');
            } else {
                if (stack.length === 0) {
                    isValid = false;
                    break;
                }
                const expected = stack.pop();
                if (char !== expected) {
                    isValid = false;
                    break;
                }
            }
        }

        if (stack.length > 0) {
            isValid = false;
        }

        results.push(isValid ? 'S' : 'N');
    }

    return results;
}
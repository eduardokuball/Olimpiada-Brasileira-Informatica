const n = parseInt(prompt());
const results = [];

for (let i = 0; i < n; i++) {
    const stack = [];
    const line = prompt().trim();
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

    const result = isValid ? 'S' : 'N';
    results.push(result);
}

results.forEach((result) => {console.log(result);});
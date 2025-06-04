let [n, m] = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let a = new Set(prompt()
    .split(' ')
    .map((e) =>{
        return parseInt(e);
    })
);
let b = prompt()
    .split(' ')
    .map((e) => {
        return parseInt(e);
    });

let countedB = new Set();

let isValid = true;
let invalid = 0;

for (let i = 0; i < m; i++) {
    let current = b[i];
    let validCase = false;

    if (a.has(current)) {
        validCase = true;
    } else {
        for (let j = 0; j < i; j++) {
            if (countedB.has(current - b[j])) {
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

let output = isValid ? "sim" : invalid;
console.log(output);

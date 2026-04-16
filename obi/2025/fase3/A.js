function isValid(sections, l, r) {
    let ones = 0;
    for (let i = l; i <= r; i++)
        if (sections[i] === 1) ones++;
    return ones === 1;
}

// Main Funcion
export default function photos(sections) {
    let counter = 0;

    for (let i = 0; i < sections.length; i++) {
        const start = i;

        for (let j = 0; j < sections.length; j++) {
            const end = j;
            if (isValid(sections, start, end)) counter++;
        }
    }

    return counter;
}

function blocksFrom(number) {
    const blocks = [];
    number.toString()
        .split('')
        .forEach(char => blocks.push(parseInt(char)));
    return blocks;
}

function resume(number = 0) {
    const blocks = blocksFrom(number);
    let even = 0;

    blocks.forEach(block => {
        if (block % 2 === 0) even++;
    });

    const odd = blocks.length - even;

    const resumed = [blocks.length, odd, even].join('');
    return parseInt(resumed)
}

// Main Function
export default function countResumes(number = 0) {
    let current = number;
    let counter = 0;

    while (true) {
        const resumed = resume(current);
        if (resumed === current) break;
        
        current = resumed;
        counter++;
    }

    return counter;
}

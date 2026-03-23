function calculateApproved(participants, requiredNote) {
    let approved = 0;

    for (let i = 0; i < participants; i++) {
        const [note1, note2] = prompt()
            .split(' ')
            .map(Number);
        
        if (note1 + note2 >= requiredNote) {
            approved++;
        }
    }

    return approved;
}

const [participants, requiredNote] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const approved = calculateApproved(participants, requiredNote);

console.log(approved);

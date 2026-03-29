export default function calculateApproved(requiredNote, grades) {
    let approved = 0;

    for (const [note1, note2] of grades) {
        if (note1 + note2 >= requiredNote) {
            approved++;
        }
    }

    return approved;
}
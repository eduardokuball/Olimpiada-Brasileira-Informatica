export default function getConceptFromNote(note) {
    if (note < 1) return "E";
    if (note <= 35) return "D";
    if (note <= 60) return "C";
    if (note <= 85) return "B";
    return "A";
}


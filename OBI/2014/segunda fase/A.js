function countItem(array,item){
    let count = 0;
    for(const a of array){
        if(a == item) count++;
    }
    return count;
}

function frequences(grade){
    const frequencesNotes = [];
    let set = new Set(grade);
    for(const item of set){
        const count = countItem(grade, item);
        frequencesNotes.push({
            note: item,
            frequency: count
        });
    }
    return frequencesNotes.sort((a, b) => b.frequency - a.frequency);
};

function noteMostFrequency(frequencesNotes){
    let mostFrequency = frequencesNotes[0].frequency;
    let notes = [];
    for(const note of frequencesNotes){
        if(note.frequency == mostFrequency) notes.push(note.note);
    }
    return notes[notes.length - 1];
};

const quantity = parseInt(prompt());
const grade = prompt()
    .split(' ', quantity)
    .map(e => parseInt(e));


const frequencesNotes = frequences(grade);
const mostNoteFrequency = noteMostFrequency(frequencesNotes);

console.log(mostNoteFrequency);



const sequence = String(prompt());
const sequences = ["10100", "100", "0"];

function sequenceH(sequence) {
    let sequency = sequence.split("#")[0];

    for (let i = 0; i < sequence.length; i++) {
        sequences.forEach((s) => {
            sequency = sequency.split(s).join("");
        });
    }

    return sequency.length < 1 ? "Sim \n " : "Não \n ";
}

console.log(sequenceH(sequence));
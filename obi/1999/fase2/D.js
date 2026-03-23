const sequences = ["10100", "100", "0"];

export default function sequenceH(sequence) {
    let sequency = sequence.split("#")[0];

    for (let i = 0; i < sequence.length; i++) {
        sequences.forEach((s) => {
            sequency = sequency.split(s).join("");
        });
    }

    return sequency.length < 1 ? "Sim" : "Não";
}


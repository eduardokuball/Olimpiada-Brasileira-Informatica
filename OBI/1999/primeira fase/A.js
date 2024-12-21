let [lenghtString,lenghtSubString] = prompt('tamanho da subcadeia e cadeia')
.split(' ')
.map(Number);
let substring = prompt('subcadeia').toUpperCase();
let string = prompt('cadeia').toUpperCase();

let stringHelperSubs = string;
let foundedSubstringsPositions = [];

function invertSubstring(substring) {
    let correspondentChars = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    };

    let substringArray = substring.split('');

    let invertedSubstring = substringArray.map((e, i, arr) => {
        return correspondentChars[e];
    });

    return invertedSubstring.join('');
};

while (true) {
    let substringFounded = stringHelperSubs.indexOf(substring);

    if (substringFounded === -1) {
        break;
    }; 

    let xChars = 'x'.repeat(substring.length);
    stringHelperSubs = stringHelperSubs.replace(substring, xChars);
    foundedSubstringsPositions.push(substringFounded+1);
};

let stringHelpersInverts = string;
let foundedInvertedsPositions = [];

while (true) {
    let invertedSubstring = invertSubstring(substring).split('').reverse().join('');
    let substringFounded = stringHelpersInverts.indexOf(invertedSubstring);

    if (substringFounded === -1) {
        break;
    }; 

    let xChars = 'x'.repeat(invertedSubstring.length);
    stringHelpersInverts = stringHelpersInverts.replace(invertedSubstring, xChars);
    foundedInvertedsPositions.push(substringFounded+1);
};


function formatOccurrences() {
    if (foundedSubstringsPositions.length === 0) {
        console.log("Ocorrência direta: 0");
    } else {
        console.log("Ocorrência direta: " + foundedSubstringsPositions.join(" "));
    }

    if (foundedInvertedsPositions.length === 0) {
        console.log("Ocorrência complementar invertida: 0");
    } else {
        console.log("Ocorrência complementar invertida: " + foundedInvertedsPositions.join(" "));
    }
}

formatOccurrences();
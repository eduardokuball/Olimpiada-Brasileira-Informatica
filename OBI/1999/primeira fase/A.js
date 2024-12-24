const [lenghtString, lenghtSubString] = prompt('tamanho da subcadeia e cadeia')
    .split(' ')
    .map(Number);
const substring = prompt('subcadeia').toUpperCase();
const string = prompt('cadeia').toUpperCase();

let stringHelperSubs = string;
const foundedSubstringsPositions = [];

function invertSubstring(substring) {
    const correspondentChars = {
        'A': 'T',
        'T': 'A',
        'G': 'C',
        'C': 'G',
    };

    const substringArray = substring.split('');

    const invertedSubstring = substringArray.map((e) => {
        return correspondentChars[e];
    });

    return invertedSubstring.join('');
}

while (true) {
    const substringFounded = stringHelperSubs.indexOf(substring);

    if (substringFounded === -1) {
        break;
    }

    const xChars = 'x'.repeat(substring.length);
    stringHelperSubs = stringHelperSubs.replace(substring, xChars);
    foundedSubstringsPositions.push(substringFounded + 1);
}

let stringHelpersInverts = string;
const foundedInvertedsPositions = [];

while (true) {
    const invertedSubstring = invertSubstring(substring).split('').reverse().join('');
    const substringFounded = stringHelpersInverts.indexOf(invertedSubstring);

    if (substringFounded === -1) {
        break;
    }

    const xChars = 'x'.repeat(invertedSubstring.length);
    stringHelpersInverts = stringHelpersInverts.replace(invertedSubstring, xChars);
    foundedInvertedsPositions.push(substringFounded + 1);
}

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
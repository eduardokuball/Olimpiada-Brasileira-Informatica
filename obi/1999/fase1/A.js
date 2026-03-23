function invertSubstring(substring) {
    const correspondentChars = {
        'A': 'T', 'T': 'A', // A vira T e vice-versa
        'G': 'C', 'C': 'G', // G vira C e vice-versa
    };

    return substring.split('').map((e) => correspondentChars[e]).join('');
}

// Main function
export default function genome(substring, string) {
    let stringHelperSubs = string;
    const substringsPositions = [];
    
    while (true) {
        const substringFounded = stringHelperSubs.indexOf(substring);
    
        if (substringFounded === -1) break;
    
        const xChars = 'x'.repeat(substring.length);
        stringHelperSubs = stringHelperSubs.replace(substring, xChars);
        substringsPositions.push(substringFounded + 1);
    }
    
    let stringHelpersInverts = string;
    const invertedsPositions = [];
    
    while (true) {
        const invertedSubstring = invertSubstring(substring).split('').reverse().join('');
        const substringFounded = stringHelpersInverts.indexOf(invertedSubstring);
    
        if (substringFounded === -1) break;
    
        const xChars = 'x'.repeat(invertedSubstring.length);
        stringHelpersInverts = stringHelpersInverts.replace(invertedSubstring, xChars);
        invertedsPositions.push(substringFounded + 1);
    }

    return [substringsPositions, invertedsPositions]
    
}

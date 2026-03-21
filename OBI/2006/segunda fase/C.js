// Essa seria a solução brute force, provavelmente não passaria em termos de eficiência

function getSubsequences(string) {
    const max = parseInt('1'.repeat(string.length), 2); // valor máximo da máscara
    const subs = new Set();

    for (let i = 2; i <= max; i++) {
        const binary = i.toString(2).padStart(string.length, '0');
        console.warn(`binary ${i}:`, binary);
        
        // Aplica a máscara
        // Transforma algo como:
        // 111010 em -> ban_a_ -> bana
        const subsequence = string.split('').filter((_, idx) => parseInt(binary[idx])).join('');
        
        console.warn('subsequence:', subsequence);
        if (subs.has(subsequence)) continue;
        subs.add(subsequence);
    }

    return [...subs].toSorted((a,b) => a.length - b.length);
}

function isSubsequence(sub, string) {
    let i = 0; // sub
    let j = 0; // string
    while(i < sub.length && j < string.length){
        if(sub[i] === string[j]) i++;
        j++;
    }
    return i === sub.length;
    
}

function main(s1, s2) {
    const subs = getSubsequences(s1);
    console.warn('subs: ', subs);

    for (const s of subs) {
        if (isSubsequence(s, s2)) continue;
        return s.length;
    }

    return s1.length;
}

const s1 = prompt('Digite a primeira string');
const s2 = prompt('Digite a segunda string');
console.log(main(s1, s2));

class Permutations {
    static fromArray(array) {
        if (array.length <= 1) return [array];
        let perms = [];
        
        for (let i = 0; i < array.length; i++) {
            const char = array[i];
            if (array.indexOf(char) !== i) continue;
            const remaining = [...array.slice(0, i), ...array.slice(i + 1)];
            const subPermutations = Permutations.fromArray(remaining);
            for (let sub of subPermutations) perms.push(char + sub);
        }

        return perms;
    }
    
    static fromString(string) {
        if (string.length <= 1) return [string];
        let perms = [];
        
        for (let i = 0; i < string.length; i++) {
            const char = string[i];
            if (string.indexOf(char) !== i) continue;
            const remaining = string.slice(0, i) + string.slice(i + 1);
            const subPermutations = Permutations.fromString(remaining);
            for (let sub of subPermutations) perms.push(char + sub);
        }

        return perms;
    }
}

export default Permutations;

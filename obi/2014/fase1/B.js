export default function decryptPhrase(words = []) {
    return words
        .map(word => {
            let result = '';
            for (let i = 1; i < word.length; i += 2) {
                result += word[i];
            }
            return result;
        })
        .join(' ');
}
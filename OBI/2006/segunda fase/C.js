let string1 = prompt('digite a primeira String')
.split('');
let string2 = prompt('digite a segunda String')
.split('');

function subsequences() {
    let count = 0;
    string1.forEach((letter) => {
        for (let i = 0; i < string2.length; i++) {
            if (letter === string2[i]) {
                console.log(letter, string2[i]);
                console.log(string2.join(''));
                count++;
                string2.splice(0, i + 1);
                console.log(string2.join(''));
                return; 
            }
        }
    });
    return count;
}

console.log(subsequences());


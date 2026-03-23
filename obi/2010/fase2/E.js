const area = parseInt(prompt());
const stars = parseInt(prompt());

let count = 0;
const photons = 4000000;

for (let i = 0; i < stars; i++) {
    const f = parseInt(prompt());
    if (f * area >= photons) {
        count++;
    }
}

console.log(count);

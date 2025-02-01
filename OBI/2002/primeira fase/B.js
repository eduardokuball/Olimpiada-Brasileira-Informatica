const [jhon, josef, objects] = prompt()
    .split(' ', 3)
    .map(e => parseInt(e));

const objectsValues = [];

for (let i = 0; i < objects; i++) {
    const value = parseInt(prompt());
    objectsValues.push(value);
}

objectsValues.sort((a, b) => a - b);

let jhonTotal = 0;
let josefTotal = 0;

const objectsValuesSum = objectsValues.reduce((acc, e) => acc + e, 0);
const expectedValueForEach = objectsValuesSum / 2;

while (objectsValues.length > 0) {
    const objectValue = objectsValues.pop();

    // Will any of them go over the limit?
    if (jhonTotal + objectValue > expectedValueForEach) {
        josefTotal += objectValue;
        continue;
    }

    if (josefTotal + objectValue > expectedValueForEach) {
        jhonTotal += objectValue;
        continue;
    }

    // Have any of them reached their limit yet?
    if (jhonTotal + objectValue === expectedValueForEach) {
        jhonTotal += objectValue;
        continue;
    }

    if (josefTotal + objectValue === expectedValueForEach) {
        josefTotal += objectValue;
        continue;
    }

    // Distribute to those who have less
    if (jhonTotal <= josefTotal) {
        jhonTotal += objectValue;
        continue;
    }
    
    // Otherwise...
    josefTotal += objectValue;
}

console.log(jhonTotal === josefTotal ? 'S' : 'N');

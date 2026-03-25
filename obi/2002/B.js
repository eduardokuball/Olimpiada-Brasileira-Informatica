export default function canDivideEqually(objectsValues) {


    objectsValues.sort((a, b) => a - b);

    let jhonTotal = 0;
    let josefTotal = 0;

    const objectsValuesSum = objectsValues.reduce((acc, e) => acc + e, 0);
    const expectedValueForEach = objectsValuesSum / 2;

    while (objectsValues.length > 0) {
        const objectValue = objectsValues.pop();

        // vai estourar limite?
        if (jhonTotal + objectValue > expectedValueForEach) {
            josefTotal += objectValue;
            continue;
        }

        if (josefTotal + objectValue > expectedValueForEach) {
            jhonTotal += objectValue;
            continue;
        }

        // bate exatamente o limite?
        if (jhonTotal + objectValue === expectedValueForEach) {
            jhonTotal += objectValue;
            continue;
        }

        if (josefTotal + objectValue === expectedValueForEach) {
            josefTotal += objectValue;
            continue;
        }

        // distribui para quem tem menos
        if (jhonTotal <= josefTotal) {
            jhonTotal += objectValue;
        } else {
            josefTotal += objectValue;
        }
    }

    return jhonTotal === josefTotal ? 'S' : 'N';
}
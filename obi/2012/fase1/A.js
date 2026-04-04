function generateRotations(a, b, c) {
    return [
        { height: c, width: a },
        { height: c, width: b },
        { height: a, width: b },
        { height: a, width: c },
        { height: b, width: a },
        { height: b, width: c },
    ];
}

export default function canPassThroughDoor(a, b, c, doorHeight, doorWidth) {
    const patterns = generateRotations(a, b, c);

    let canPass = false;

    patterns.forEach((pattern) => {
        if (pattern.width <= doorWidth && pattern.height <= doorHeight) canPass = true;
    });

    return canPass ? 'S' : 'N';
}
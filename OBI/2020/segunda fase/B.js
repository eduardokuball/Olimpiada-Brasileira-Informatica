function createFrame(id, [x, y]=[]) {
    const area = x * y;
    return {
        id,
        dimensions: [x, y],
        area,
        remainingArea: area - pictureArea
    };
}

const pictureDimension = prompt()
    .split(' ', 2).map(e => parseInt(e));

const [pictureHeight, pictureWidth] = pictureDimension;
const pictureArea = pictureHeight * pictureWidth;

const framesQuantity = parseInt(prompt());

const picFrames = [];

for (let i = 1; i <= framesQuantity; i++) {
    const dimensions = prompt()
    .split(' ', 2).map(e => parseInt(e));
    
    const frame = createFrame(i, dimensions);
    picFrames.push(frame);
}

const fitPicFrames = picFrames.filter(frame => {
    const [x, y] = frame.dimensions;

    const fitInFrame =
        (x >= pictureHeight && y >= pictureWidth) ||
        (x >= pictureWidth && y >= pictureHeight);

    return fitInFrame;
});

let perfectFrame = null;

for (let frame of fitPicFrames) {
    const { remainingArea } = frame;

    if (!perfectFrame) {
        perfectFrame = frame;
        continue;
    }

    if (remainingArea < perfectFrame.remainingArea)
        perfectFrame = frame;
}

console.log(perfectFrame?.id || -1);

export default function findBestFrame(pictureHeight, pictureWidth, frames) {
    const pictureArea = pictureHeight * pictureWidth;

    function createFrame(id, [x, y]) {
        const area = x * y;
        return {
            id,
            dimensions: [x, y],
            remainingArea: area - pictureArea
        };
    }

    const picFrames = frames.map((dimensions, i) =>
        createFrame(i + 1, dimensions)
    );

    const fitPicFrames = picFrames.filter(frame => {
        const [x, y] = frame.dimensions;

        return (
            (x >= pictureHeight && y >= pictureWidth) ||
            (x >= pictureWidth && y >= pictureHeight)
        );
    });

    let perfectFrame = null;

    for (const frame of fitPicFrames) {
        if (!perfectFrame || frame.remainingArea < perfectFrame.remainingArea) {
            perfectFrame = frame;
        }
    }

    return perfectFrame ? perfectFrame.id : -1;
}
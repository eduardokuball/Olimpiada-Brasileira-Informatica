function collagePatterns(photos) {
    const patterns = [];

    const pattern1 = {
        width: Math.max(photos[0].width, photos[1].width),
        height: photos[0].height + photos[1].height
    };

    const pattern2 = {
        width: Math.max(photos[0].height, photos[1].height),
        height: photos[0].width + photos[1].width
    };

    const pattern3 = {
        width: Math.max(photos[1].height, photos[0].width),
        height: photos[0].height + photos[1].width
    };

    const pattern4 = {
        width: Math.max(photos[0].height, photos[1].width),
        height: photos[0].width + photos[1].height
    };

    patterns.push(pattern1, pattern2, pattern3, pattern4);

    return patterns;
}

function fitsInPage(patterns, pageHeight, pageWidth) {
    for (const pattern of patterns) {
        if (
            pattern.height <= pageHeight &&
            pattern.width <= pageWidth
        ) {
            return true;
        }
    }
    return false;
}

export default function canFitPhotosInPage(photos = [], pageHeight, pageWidth) {
    const patterns = collagePatterns(photos);
    const isFit = fitsInPage(patterns, pageHeight, pageWidth);
    return isFit ? 'S' : 'N';
}
function collectPhotos(){
    const photos = [];
    for(let i = 0; i < 2; i++){
        const [photoWidth, photoHeight] = prompt()
            .split(' ')
            .map(e => parseInt(e));
        const photo = {
            width: photoWidth,
            height: photoHeight
        }
        photos.push(photo);
    }
    return photos;
};

function collagePatterns(photos){
    const patterns = [];

    const pattern1 = {
        width: photos[0].width > photos[1].width ? photos[0].width : photos[1].width,
        height: photos[0].height + photos[1].height 
    };

    const pattern2 = {
        width: photos[0].height > photos[1].height ? photos[0].height : photos[1].height,
        height: photos[0].width + photos[1].width
    };

    const pattern3 = {
        width: photos[1].height > photos[0].width ? photos[1].height : photos[0].width,
        height: photos[0].height + photos[1].width
    };

    const pattern4 = {
        width: photos[0].height > photos[1].width ? photos[0].height : photos[1].width,
        height: photos[0].width + photos[1].height
    }

    patterns.push(pattern1, pattern2, pattern3, pattern4);

    return patterns;
}

function fitsInPage(patterns,pageHeight,pageWidth){
    let fit = false;
    for(const pattern of patterns){
        if(pattern.height <= pageHeight && pattern.width <= pageWidth){
            fit = true;
            break;
        }
    }
    return fit;
}

const [pageHeight, pageWidth] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const photos = collectPhotos();
const patterns = collagePatterns(photos);
const isFitInPage = fitsInPage(patterns,pageHeight,pageWidth);

if(isFitInPage){
    console.log('S');
} else {
    console.log('N');
}

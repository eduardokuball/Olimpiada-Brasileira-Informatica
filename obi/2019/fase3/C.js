export default function table(ana, beatriz){

    const chairs = [1,2,0];

    const first = ana % chairs.length;
    const second = beatriz % chairs.length;


    let result;
    chairs.forEach((chair) => {
        if(chair !== first && chair !== second) result = chair;
    })

    return result;
}
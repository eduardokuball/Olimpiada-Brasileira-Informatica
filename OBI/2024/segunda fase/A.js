const dimension = parseInt(prompt());

function getCountColorsCubs(dimension){
    const OnePaintedFace = ((dimension - 2) ** 2) * 6;
    const twoPaintedFaces = ((dimension - 2) * 4) * 3;
    const threePaintedFaces = 8 
    const noPaintedFaces = (dimension * dimension * dimension) - OnePaintedFace - twoPaintedFaces - threePaintedFaces;

    return [noPaintedFaces, OnePaintedFace, twoPaintedFaces, threePaintedFaces];
};

const colors = getCountColorsCubs(dimension);

colors.forEach((color) => {
    console.log(color);
});
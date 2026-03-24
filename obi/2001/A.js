export default function isInGround(points,x1, y1, x2, y2){
    
    let meteorsOnTheGround = 0;

    if (x1 > x2) [x1, x2] = [x2, x1];
    if (y1 < y2) [y1, y2] = [y2, y1];

    for(var i = 0; i < points.length; i++){
        if (points[i][0] >= x1 && points[i][0] <= x2 && points[i][1] >= y2 && points[i][1] <= y1) meteorsOnTheGround++;
    };
    
    return meteorsOnTheGround;
};


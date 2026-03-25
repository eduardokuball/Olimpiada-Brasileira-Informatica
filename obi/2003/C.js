export default function getMoves(disks) {

    const moves = Math.pow(2, disks) - 1;
    
    return moves;
};


function generateSeats(rows, columns) {
    let seats = [];
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 


    for (let i = 1; i <= rows; i++) {
        let row = [];
        
        for (let j = 0; j < columns; j++) {
            let letter = letters[j];
            row.push(`${i} ${letter}`);
        }
        
        seats.push(row);
    }

    return seats;
};

function searchSeat(seatMatrix){
    let count = 0;
    for(let i = firstClass - 1; i < seatMatrix.length; i++){
        for(let j = 0; j < seatMatrix[i].length; j++){
            count++;
            if(count == position){
                return seatMatrix[i][j];
            }
        }
    };
    return "PROXIMO VOO";
};

const [ rows, columns, firstClass, position ] = prompt()
    .split(' ',4)
    .map(e => parseInt(e));

const seatMatrix = generateSeats(rows, columns);

const selectedSeat = searchSeat(seatMatrix);

console.log(selectedSeat);

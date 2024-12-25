let [lines, column, start, position] = prompt('linhas,colunas,começo,posição')
.split(' ')
.map(Number);
start = (lines * (start - 1)) + 1

const columns = [];
for (let i = 0; i < column; i++) {
    columns.push(String.fromCharCode(97 + i));
}
let count = 0;
let seat = "";
let positionSeat = 0;
const rows = [];
for (let i = 0; i < lines; i++) {
    const row = [];
    for (let j = 0; j < columns.length; j++) {
        count++;
        if(count >= start){
            positionSeat++;
        };
        row.push(`${i + 1}${columns[j]}`);
        if(positionSeat == position){
            seat = `${i + 1}${columns[j]}`;
        }
    }
    rows.push(row);
}

console.log(rows);
console.log(start);
console.log(seat);


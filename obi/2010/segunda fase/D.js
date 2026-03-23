function valuesMatrix1(p,q,x,i,j){
    const value = ((p * i) + (q * j)) % x
    return value;
};

function valuesMatrix2(r,s,y,i,j){
    const value = ((r * i) + (s * j)) % y
    return value;
};
function getMatrix(p1,p2,p3){
    const matrix = [];
    for(let i = 1; i < dimensionsMatrix + 1; i++){
        let line = []
        for(let j = 1; j < dimensionsMatrix + 1; j++){
            line.push(valuesMatrix1(p1,p2,p3,i,j));
        }
        matrix.push(line);
    }
    return matrix;
};

function multiplyMatrices(A, B) {
    let result = new Array(A.length).fill(0).map(() => new Array(B[0].length).fill(0));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < A[0].length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
};

const dimensionsMatrix = Number(prompt());

const [p,q,r,s,x,y] = prompt()
    .split(' ')
    .map(e => parseInt(e));

const search = prompt()
    .split(' ')
    .map(e => parseInt(e));

const matrix1Result = getMatrix(p,q,x);

const matrix2Result = getMatrix(r,s,y);

const matrixC = multiplyMatrices(matrix1Result, matrix2Result);

const i = search[0] - 1;
const j = search[1] - 1;

console.log(matrixC[i][j]);
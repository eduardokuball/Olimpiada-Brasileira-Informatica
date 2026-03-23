import { readFileSync } from 'fs';

let txt = [];
// Só lê stdin se NÃO estiver rodando no Jest
if (!process.env.JEST_WORKER_ID)
    txt = readFileSync(0, 'utf-8').trim().split(/\r?\n/);
let line = 0;

export function input() {
    return txt[line++]; // Retorna uma linha de cada vez
}

// Alias para o console.log
export function output(...data) {
    console.log(...data);
}

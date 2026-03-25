import { input, output } from '../../../../utils/io.js';
import main from "../D.js";

const [n,k] = input().split(' ').map(Number);

const playes = [];

for (let i = 0; i < 2 ** n; i++) {
    playes.push(Number(input()));
};

output(main(playes, k));
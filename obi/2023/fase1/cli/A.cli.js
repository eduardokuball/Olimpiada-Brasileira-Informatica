import { input, output } from '../../../../utils/io.js';
import countBillsPaid from '../A.js';

const availableMoney = Number(input());
const butcher = Number(input());
const pharmacy = Number(input());
const bakehouse = Number(input());

const result = countBillsPaid(availableMoney, [
    butcher,
    pharmacy,
    bakehouse
]);

output(result);
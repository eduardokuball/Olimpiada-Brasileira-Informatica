import { input, output } from '../../../../utils/io.js';
import hands from "../A.js";

const number = input();

const result = hands(number);


result.forEach((hand) => {
    output(hand);
})
